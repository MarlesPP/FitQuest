import { GoogleGenerativeAI } from "@google/generative-ai";
import { Workout, DifficultyLevel, EquipmentOption, WorkoutType } from '../types';

// 🔑 Asegúrate de que la clave existe
const apiKey = import.meta.env.VITE_GEMINI_API_KEY ?? "";
if (!apiKey) {
  console.error("❌ ERROR: VITE_GEMINI_API_KEY no está definida en Vercel o .env");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const generateWorkout = async (
  difficulty: DifficultyLevel, 
  equipment: EquipmentOption[], 
  workoutType: WorkoutType,
  t: (key: string, ...args: any[]) => string,
  useYellowDudeInspiration: boolean
): Promise<Workout> => {
  const equipmentList = equipment.length > 0 ? equipment.map(e => e.name).join(', ') : t('gemini.noEquipment');
  const difficultyText = t(`difficultyLevels.${difficulty}`);
  const workoutTypeText = t(`workoutTypes.${workoutType}`);
  
  const systemPrompt = workoutType === WorkoutType.OFFICE 
      ? t('gemini.officeSystemPrompt')
      : t('gemini.systemPrompt');
      
  const yellowDudePrompt = useYellowDudeInspiration ? `\n${t('gemini.yellowDudeInspiration')}\n` : "";

  const prompt = `
      ${systemPrompt}
      
      ${t('gemini.workoutParametersTitle')}
      - ${t('gemini.difficultyParam', difficultyText)}
      - ${t('gemini.focusParam', workoutTypeText)}
      - ${t('gemini.equipmentParam', equipmentList)}
      ${yellowDudePrompt}
      ${t('gemini.instructions')}
  `;

  try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          responseMimeType: "application/json" 
        },
      });

      const result = await model.generateContent(prompt);
      const response = result.response;
      const jsonText = response.text();
      
      if (!jsonText) {
          throw new Error("Received an empty response from the API.");
      }

      const workoutData = JSON.parse(jsonText);
      
      workoutData.level = difficulty;
      workoutData.workoutType = workoutType;

      return workoutData as Workout;

  } catch (error) {
      console.error("Error generating workout from Gemini:", error);
      if (error instanceof SyntaxError) {
           throw new Error("Failed to parse the JSON response from the API. The response was not valid JSON.");
      }
      throw new Error("Failed to generate workout plan from the API.");
  }
};
