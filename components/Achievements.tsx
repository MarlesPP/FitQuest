import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from '../contexts/LanguageContext';
import { achievementsContent } from '../content/achievementsContent';

interface Achievement {
  id: string;
  icon: React.ElementType;
  title: string;
  lockedDescription: string;
  unlockedDescription: string;
  points: number;
}

interface AchievementsProps {
  unlockedAchievements: string[];
  totalXP: number;
  theme: 'yellow' | 'cyan';
}

const AchievementCard: React.FC<{
  achievement: Achievement;
  isUnlocked: boolean;
  theme: 'yellow' | 'cyan';
}> = ({ achievement, isUnlocked, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`rounded-2xl border ${
          isUnlocked 
            ? theme === 'yellow' 
              ? 'border-yellow-400 bg-yellow-500/10' 
              : 'border-cyan-400 bg-cyan-500/10' 
            : 'border-gray-700 bg-gray-900/50'
        }`}
      >
        <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
          {/* Renderizamos el icono solo si existe */}
          {achievement?.icon && (
            <achievement.icon
              className={`w-12 h-12 ${
                isUnlocked 
                  ? theme === 'yellow' 
                    ? 'text-yellow-400' 
                    : 'text-cyan-400' 
                  : 'text-gray-500'
              }`}
            />
          )}
          <h3
            className={`font-orbitron font-bold text-lg ${
              isUnlocked ? 'text-white' : 'text-gray-400'
            }`}
          >
            {achievement?.title || 'Sin título'}
          </h3>
          <p
            className={`text-sm ${
              isUnlocked ? 'text-gray-300' : 'text-gray-500'
            }`}
          >
            {isUnlocked
              ? achievement?.unlockedDescription || ''
              : achievement?.lockedDescription || ''}
          </p>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              isUnlocked 
                ? theme === 'yellow'
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'bg-cyan-500/20 text-cyan-400'
                : 'bg-gray-800 text-gray-500'
            }`}
          >
            {achievement?.points || 0} XP
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Achievements: React.FC<AchievementsProps> = ({ unlockedAchievements, totalXP, theme }) => {
  const { language } = useLanguage();
  const content = achievementsContent[language];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="font-orbitron text-2xl font-bold text-white mb-2">
          {content.title || 'Logros'}
        </h2>
        <p className="text-gray-400">
          {content.subtitle || 'Desbloquea logros completando entrenamientos'}
        </p>
        <p className="text-gray-300 mt-2">
          {c
