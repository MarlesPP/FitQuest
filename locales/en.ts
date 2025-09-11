import { Translations } from './es';

export const en: Translations = {
    // General
    appName: "FitQuest RPG",

    // Views
    views: {
        WORKOUT: "WORKOUT",
        RPG: "RPG",
        PROFILE: "PROFILE",
        SHOP: "SHOP",
        ACHIEVEMENTS: "LOGS",
    },

    // Character Creation
    character: {
        title: "Create Your Hero",
        subtitle: "Your fitness adventure is about to begin.",
        nameLabel: "Hero Name (Optional)",
        namePlaceholder: "Enter your name",
        genderLabel: "Choose your avatar's gender.",
        male: "Male",
        female: "Female",
        submit: "Begin Adventure",
    },
    
    // Header
    header: {
        level: "Level",
        quests: "Quests",
        streak: "Streak",
        gold: "Gold",
    },
    
    // Loading
    loading: {
        generating: "Forging your quest...",
        generatingHint: "The digital blacksmiths are hard at work.",
    },

    // Error
    error: {
        title: "An Error Occurred",
        generateWorkout: "Failed to generate your workout. Please check your connection and try again.",
        tryAgain: "Try Again",
    },

    // Workout Generator
    generator: {
        title: "Generate New Quest",
        difficulty: "Difficulty Level",
        focus: "Workout Focus",
        equipment: "Available Equipment",
        equipmentHint: "Select any household items you can use. Leave blank for bodyweight only.",
        inspiration: "Inspiration (Optional)",
        yellowDudeLabel: "Yellow Dude Style",
        yellowDudeHint: "Incorporate creative calisthenics exercises inspired by the 'Yellow Dude' YouTube channel.",
        submit: "CREATE MY WORKOUT",
        arceusHint: "Debug: Max out level, streak, and monthly quests.",
    },

    // Workout Display
    display: {
        regenerate: "REGENERATE QUEST",
        begin: "BEGIN MISSION",
    },

    // Workout In Progress
    inProgress: {
        loading: "Loading exercise...",
        exerciseCount: "Exercise {0} of {1}",
        restTitle: "REST",
        exerciseTitle: "CURRENT EXERCISE",
        restMessage: "Take a breather",
        nextUp: "Next up:",
        finishing: "Finishing cooldown",
        skipRest: "SKIP REST",
        nextExercise: "DONE, NEXT!",
    },

    // Workout Summary
    summary: {
        title: "QUEST COMPLETE!",
        subtitle: "You conquered \"{0}\"",
        rewardsTitle: "REWARDS",
        xpLabel: "Base XP + Time Bonus",
        goldLabel: "Currency Gained",
        progressTitle: "PROGRESS",
        levelLabel: "Level {0}",
        currentLevel: "Current Level",
        streakLabel: "{0} Day Streak!",
        keepItUp: "Keep it up!",
        newQuestButton: "START NEW QUEST",
    },
    
    // Profile
    profile: {
        title: "Hero Profile",
        defaultName: "Lv. {0} Adventurer",
        questsDone: "Quests Done",
        currentStreak: "Current Streak",
        days: "{0} Days",
        totalGold: "Total Gold",
        currentLevel: "Current Level",
        restPlannerTitle: "Weekly Rest Planner",
        daysOfWeekShort: "S,M,T,W,T,F,S",
        toggleDay: "Toggle {0}",
        inventoryTitle: "Your Inventory",
        emptyInventory: "Visit the shop to acquire new items!",
        equip: "EQUIP",
        unequip: "UNEQUIP",
        showMore: "Show More",
        showLess: "Show Less",
    },
    
    // Shop
    shop: {
        title: "Hero's Shop",
        monthlyFrameProgress: "Complete {0} more workouts this month.",
        lockedDefault: "This item is currently locked.",
        owned: "OWNED",
        purchase: "Purchase for {0}",
    },

    // Achievements
    achievements: {
        title: "Hall of Fame",
        subtitle: "Your deeds and medals of honor. You can pin up to 3 on your profile.",
        pin: "Pin to profile",
        unpin: "Unpin from profile",
        showcaseFull: "Showcase is full",
    },
    
    // RPG
    rpg: {
        title: "RPG Arena",
        progressionTitle: "Hero Progression",
        currentRank: "Current Rank",
        nextRank: "Next Rank",
        reachLevel: "Reach Level {0} to achieve",
        maxRank: "MAX RANK ACHIEVED!",
        legend: "You are a true legend!",
        statsTitle: "Hero Stats",
        statsSubtitle: "Assign points to become stronger.",
        availablePoints: "Available Hero Points",
        strength: "Strength",
        agility: "Agility",
        endurance: "Endurance",
        reset: "Reset",
        confirm: "Confirm",
    },

    // Difficulty Levels
    difficultyLevels: {
        BEGINNER: 'Beginner',
        INTERMEDIATE: 'Intermediate',
        ADVANCED: 'Advanced',
    },

    // Workout Types
    workoutTypes: {
        FULL_BODY: 'Full Body',
        UPPER_BODY: 'Upper Body',
        LOWER_BODY: 'Lower Body',
        CORE: 'Core',
        OFFICE: 'Office / Active Break',
    },

    // Gemini Prompt
    gemini: {
        noEquipment: "none (bodyweight only)",
        systemPrompt: "Act as an expert calisthenics and home fitness coach with a flair for RPG-style motivation. Your goal is to create a safe, effective, and engaging workout.",
        officeSystemPrompt: "Act as a physical therapist and ergonomics expert. Your goal is to create an 'active break' routine for office workers. The exercises must be subtle, safe, and performable at a desk, requiring no special equipment, no sweating, and without drawing attention. Focus on relieving tension in the neck, back, wrists, and improving circulation in the legs.",
        yellowDudeInspiration: "Additional Inspiration: Where possible, draw inspiration from the 'Yellow Dude' YouTube channel for creative and effective home calisthenics exercises.",
        workoutParametersTitle: "Workout Parameters:",
        difficultyParam: "- Difficulty Level: {0}",
        focusParam: "- Workout Focus: {0}",
        equipmentParam: "- Available Equipment: {0}",
        instructions: `
Instructions:
1.  Design a complete workout routine based on the user's parameters.
2.  The TOTAL workout time, including warm-up and cool-down, should be between 20 and 35 minutes (or 5-10 minutes for the Office Active Break). Adjust exercises, sets, and rests to meet this goal.
3.  Structure the routine into three distinct phases: a dynamic warm-up, the main workout, and a static cool-down.
4.  For beginners, suggest slightly longer rest periods. For advanced, suggest shorter rests.
5.  For each exercise, provide all the required fields in the schema.
6.  'estimatedTimeInSeconds' should be a realistic time to perform all sets of ONE exercise (e.g., 3 sets of 10 push-ups might take 90 seconds).
7.  'restAfterInSeconds' is the break AFTER an exercise is completed. A typical rest might be 30-90 seconds.
8.  Ensure the exercises are appropriate for the equipment provided. If no equipment is listed, generate a bodyweight-only routine.

The entire output MUST be a single, valid JSON object that strictly adheres to the provided schema. Do not include any text or markdown formatting before or after the JSON object.
        `,
    },
};