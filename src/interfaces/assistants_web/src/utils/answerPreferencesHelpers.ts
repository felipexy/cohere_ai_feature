/**
 * Helper functions for managing answer preferences
 */

type AnswerPreferences = {
  detailLevel: number;
  formality: number;
};

type AnswerPreferencesSwitches = {
  askQuestions: boolean;
};

/**
 * Generates instruction text to append to the preamble based on the user's answer preferences
 * @param preferences The user's answer preferences
 * @param basePreamble The original preamble to modify
 * @returns The modified preamble with instructions for detail level and formality
 */
export const generatePreferencesInstructions = (
  preferences: AnswerPreferences,
  preferencesSwitches: AnswerPreferencesSwitches,
  basePreamble: string = ''
): string => {
  let detailInstruction = '';
  let formalityInstruction = '';
  
  const detailLevel = preferences.detailLevel;
  const formalityLevel = preferences.formality;
  
  if (detailLevel >= 0 && detailLevel <= 2) {
    detailInstruction = 'Your responses must be extremely concise. Use no more than 1-2 short sentences. Avoid all unnecessary details.';
  } else if (detailLevel > 2 && detailLevel <= 4) {
    detailInstruction = 'Provide brief answers with basic information. Limit to 3-4 sentences maximum.';
  } else if (detailLevel > 4 && detailLevel <= 6) {
    detailInstruction = 'Provide moderately detailed answers. Use up to one short paragraph with relevant context.';
  } else if (detailLevel > 6 && detailLevel <= 8) {
    detailInstruction = 'Provide comprehensive answers with examples. Use 1-2 detailed paragraphs.';
  } else if (detailLevel > 8 && detailLevel <= 10) {
    detailInstruction = 'Provide an extremely huge response. Include multiple sections with detailed explanations, examples, and extensive context.';
  }
  
  if (formalityLevel >= 0 && formalityLevel <= 2) {
    formalityInstruction += ' Use slang, colloquial expressions and an extremely casual tone. Talk as if you were chatting with a close friend. Be funny and playful.';
  } else if (formalityLevel > 2 && formalityLevel <= 4) {
    formalityInstruction += ' Use a casual and friendly tone, but avoid excessive slang. You can use some informal expressions and contractions, but generally maintain correct grammar. Be conversational, as if speaking with a coworker in a relaxed environment.';
  } else if (formalityLevel > 4 && formalityLevel <= 6) {
    formalityInstruction += ' Use a tone balanced between formal and informal. Avoid slang, but maintain an accessible approach. Use clear and direct language with correct grammatical structure. This is the appropriate level of formality for most day-to-day professional communications.';
  } else if (formalityLevel > 6 && formalityLevel <= 8) {
    formalityInstruction += ' Use a formal and professional tone. Avoid contractions and colloquial expressions. Use more sophisticated vocabulary when appropriate, but prioritize clarity. This level is suitable for formal business communications and technical documentation.';
  } else if (formalityLevel > 8 && formalityLevel <= 10) {
    formalityInstruction += ' Use an extremely formal and academic tone. Use sophisticated vocabulary and complex sentence structures when appropriate. Completely avoid contractions and colloquial expressions. Maintain third person and passive voice when appropriate. This style is suitable for legal documents, academic publications, and official communications.';
  }

  
  let modifiedPreamble = `${detailInstruction} ${formalityInstruction} `;
  
  if (basePreamble) {
    modifiedPreamble += basePreamble;
  }
  
  modifiedPreamble += ' Respond in the same language as the question.';
  
  if (preferencesSwitches.askQuestions) {
    modifiedPreamble += ' Ask me 2 questions about it to refine the answer.';
  }

  return modifiedPreamble;
}; 