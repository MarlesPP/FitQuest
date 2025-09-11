export const es = {
    // General
    appName: "FitQuest RPG",

    // Views
    views: {
        WORKOUT: "ENTRENAR",
        RPG: "RPG",
        PROFILE: "PERFIL",
        SHOP: "TIENDA",
        ACHIEVEMENTS: "LOGROS",
    },

    // Character Creation
    character: {
        title: "Crea Tu Héroe",
        subtitle: "Tu aventura de fitness está a punto de comenzar.",
        nameLabel: "Nombre del Héroe (Opcional)",
        namePlaceholder: "Ingresa tu nombre",
        genderLabel: "Elige el género de tu avatar.",
        male: "Masculino",
        female: "Femenino",
        submit: "Comenzar Aventura",
    },

    // Header
    header: {
        level: "Nivel",
        quests: "Misiones",
        streak: "Racha",
        gold: "Oro",
    },
    
    // Loading
    loading: {
        generating: "Forjando tu misión...",
        generatingHint: "Los herreros digitales están trabajando duro.",
    },

    // Error
    error: {
        title: "Ocurrió un Error",
        generateWorkout: "No se pudo generar tu entrenamiento. Revisa tu conexión e inténtalo de nuevo.",
        tryAgain: "Intentar de Nuevo",
    },

    // Workout Generator
    generator: {
        title: "Generar Nueva Misión",
        difficulty: "Nivel de Dificultad",
        focus: "Enfoque del Entrenamiento",
        equipment: "Equipo Disponible",
        equipmentHint: "Selecciona cualquier artículo del hogar que puedas usar. Déjalo en blanco para solo peso corporal.",
        inspiration: "Inspiración (Opcional)",
        yellowDudeLabel: "Estilo Yellow Dude",
        yellowDudeHint: "Incorpora ejercicios de calistenia creativos inspirados en el canal de YouTube 'Yellow Dude'.",
        submit: "CREAR MI ENTRENAMIENTO",
        arceusHint: "Debug: Maximizar nivel, racha y misiones mensuales.",
    },
    
    // Workout Display
    display: {
        regenerate: "REGENERAR MISIÓN",
        begin: "COMENZAR MISIÓN",
    },

    // Workout In Progress
    inProgress: {
        loading: "Cargando ejercicio...",
        exerciseCount: "Ejercicio {0} de {1}",
        restTitle: "DESCANSO",
        exerciseTitle: "EJERCICIO ACTUAL",
        restMessage: "Toma un respiro",
        nextUp: "Siguiente:",
        finishing: "Finalizando enfriamiento",
        skipRest: "SALTAR DESCANSO",
        nextExercise: "LISTO, SIGUIENTE!",
    },

    // Workout Summary
    summary: {
        title: "¡MISIÓN COMPLETA!",
        subtitle: "Conquistaste \"{0}\"",
        rewardsTitle: "RECOMPENSAS",
        xpLabel: "XP Base + Bono de Tiempo",
        goldLabel: "Monedas Obtenidas",
        progressTitle: "PROGRESO",
        levelLabel: "Nivel {0}",
        currentLevel: "Nivel Actual",
        streakLabel: "¡Racha de {0} Días!",
        keepItUp: "¡Sigue así!",
        newQuestButton: "INICIAR NUEVA MISIÓN",
    },
    
    // Profile
    profile: {
        title: "Perfil del Héroe",
        defaultName: "Aventurero Nv. {0}",
        questsDone: "Misiones Completas",
        currentStreak: "Racha Actual",
        days: "{0} Días",
        totalGold: "Oro Total",
        currentLevel: "Nivel Actual",
        restPlannerTitle: "Planificador de Descanso Semanal",
        daysOfWeekShort: "D,L,M,M,J,V,S",
        toggleDay: "Alternar {0}",
        inventoryTitle: "Tu Inventario",
        emptyInventory: "¡Visita la tienda para adquirir nuevos artículos!",
        equip: "EQUIPAR",
        unequip: "DESEQUIPAR",
        showMore: "Ver Más",
        showLess: "Ver Menos",
    },
    
    // Shop
    shop: {
        title: "Tienda del Héroe",
        monthlyFrameProgress: "Completa {0} entrenamientos más este mes.",
        lockedDefault: "Este artículo está bloqueado.",
        owned: "ADQUIRIDO",
        purchase: "Comprar por {0}",
    },

    // Achievements
    achievements: {
        title: "Salón de la Fama",
        subtitle: "Tus hazañas y medallas de honor. Puedes anclar hasta 3 en tu perfil.",
        pin: "Anclar al perfil",
        unpin: "Desanclar del perfil",
        showcaseFull: "El escaparate está lleno",
    },
    
    // RPG
    rpg: {
        title: "Arena RPG",
        progressionTitle: "Progresión del Héroe",
        currentRank: "Rango Actual",
        nextRank: "Siguiente Rango",
        reachLevel: "Alcanza el Nivel {0} para ascender",
        maxRank: "¡RANGO MÁXIMO ALCANZADO!",
        legend: "¡Eres una verdadera leyenda!",
        statsTitle: "Estadísticas del Héroe",
        statsSubtitle: "Asigna puntos para fortalecerte.",
        availablePoints: "Puntos de Héroe Disponibles",
        strength: "Fuerza",
        agility: "Agilidad",
        endurance: "Resistencia",
        reset: "Reiniciar",
        confirm: "Confirmar",
    },

    // Difficulty Levels
    difficultyLevels: {
        BEGINNER: 'Principiante',
        INTERMEDIATE: 'Intermedio',
        ADVANCED: 'Avanzado',
    },

    // Workout Types
    workoutTypes: {
        FULL_BODY: 'Cuerpo Completo',
        UPPER_BODY: 'Tren Superior',
        LOWER_BODY: 'Tren Inferior',
        CORE: 'Núcleo',
        OFFICE: 'Pausa Activa (Oficina)',
    },

    // Gemini Prompt
    gemini: {
        noEquipment: "ninguno (solo peso corporal)",
        systemPrompt: "Actúa como un experto entrenador de calistenia y fitness en casa con un toque de motivación estilo RPG. Tu objetivo es crear un entrenamiento seguro, efectivo y atractivo.",
        officeSystemPrompt: "Actúa como un fisioterapeuta y experto en ergonomía. Tu objetivo es crear una rutina de 'pausa activa' para oficinistas. Los ejercicios deben ser sutiles, seguros y realizables en un escritorio, sin necesidad de equipo especial, sin sudar y sin llamar la atención. Enfócate en aliviar la tensión en el cuello, espalda, muñecas y mejorar la circulación en las piernas.",
        yellowDudeInspiration: "Inspiración Adicional: Si es posible, inspírate en el canal de YouTube 'Yellow Dude' para ejercicios de calistenia creativos y efectivos en casa.",
        workoutParametersTitle: "Parámetros del Entrenamiento:",
        difficultyParam: "- Nivel de Dificultad: {0}",
        focusParam: "- Enfoque del Entrenamiento: {0}",
        equipmentParam: "- Equipo Disponible: {0}",
        instructions: `
Instrucciones:
1. Diseña una rutina de entrenamiento completa basada en los parámetros del usuario.
2. El tiempo TOTAL del entrenamiento, incluyendo calentamiento y enfriamiento, debe ser entre 20 y 35 minutos (o 5-10 minutos para la Pausa Activa de oficina). Ajusta ejercicios, series y descansos para cumplir este objetivo.
3. Estructura la rutina en fases distintas: un calentamiento dinámico, el entrenamiento principal y un enfriamiento estático.
4. Para principiantes, sugiere periodos de descanso ligeramente más largos. Para avanzados, sugiere descansos más cortos.
5. Para cada ejercicio, proporciona todos los campos requeridos en el esquema.
6. 'estimatedTimeInSeconds' debe ser un tiempo realista para realizar todas las series de UN ejercicio (ej. 3 series de 10 flexiones podrían tomar 90 segundos).
7. 'restAfterInSeconds' es el descanso DESPUÉS de completar un ejercicio. Un descanso típico puede ser de 30-90 segundos.
8. Asegúrate de que los ejercicios sean apropiados para el equipo proporcionado. Si no se lista equipo, genera una rutina de solo peso corporal.

La salida completa DEBE ser un único objeto JSON válido que se adhiera estrictamente al esquema proporcionado. No incluyas ningún texto o formato markdown antes o después del objeto JSON.
        `,
    },
};

export type Translations = typeof es;