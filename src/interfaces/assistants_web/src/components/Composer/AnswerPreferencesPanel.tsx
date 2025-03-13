'use client';

import React from 'react';
import { cn } from '@/utils';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Icon, Text, Slider, IconName, Switch } from '@/components/UI';
import { useBrandedColors } from '@/hooks';
import { AgentPublic } from '@/cohere-client';
import { useAnswerPreferencesStore } from '@/stores';
import { AnswerPreferencesStore } from '@/stores/slices/answerPreferencesSlice';

export const AnswerPreferencesPanel: React.FC<{
  className?: string;
  agent?: AgentPublic;
}> = ({ className = '', agent }) => {
  const { answerPreferences, answerPreferencesSwitches, setDetailLevel, setFormality, setAskQuestions } = useAnswerPreferencesStore() as AnswerPreferencesStore;
  const { bg, contrastFill, theme } = useBrandedColors(agent?.id);
  
  const handleSliderChange = (preference: string, value: number) => {
    if (preference === 'detailLevel') {
      setDetailLevel(value);
    } else if (preference === 'formality') {
      setFormality(value);
    }
  };

  const handleToggle = (checked: boolean) => {
    setAskQuestions(checked);
  };

  const getSliderLabel = (preference: string): string => {
    if (preference === 'detailLevel') {
      return 'Detail Level';
    } else if (preference === 'formality') {
      return 'Formality';
    }
    return '';
  };

  const getSwitchLabel = (preference: string): string => {
    if (preference === 'askQuestions') {
      return 'Ask Questions';
    }
    return '';
  };

  const getIcon = (preference: string): IconName => {
    if (preference === 'askQuestions') {
      return 'question';
    } else if (preference === 'detailLevel') {
      if (answerPreferences.detailLevel <= 2) {
        return 'note';
      } else if (answerPreferences.detailLevel > 2 && answerPreferences.detailLevel <= 4) {
        return 'books1';
      } else if (answerPreferences.detailLevel > 4 && answerPreferences.detailLevel <= 6) {
        return 'books2';
      } else if (answerPreferences.detailLevel > 6 && answerPreferences.detailLevel <= 8) {
        return 'books3';
      } else if (answerPreferences.detailLevel > 8 && answerPreferences.detailLevel <= 10) {
        return 'books4';
      }
    } else if (preference === 'formality') {
      if (answerPreferences.formality <= 2) {
        return 'cap';
      } else if (answerPreferences.formality > 2 && answerPreferences.formality <= 4) {
        return 'sneaker';
      } else if (answerPreferences.formality > 4 && answerPreferences.formality <= 6) {
        return 'shirt';
      } else if (answerPreferences.formality > 6 && answerPreferences.formality <= 8) {
        return 'tie';
      } else if (answerPreferences.formality > 8 && answerPreferences.formality <= 10) {
        return 'tophat';
      }
    }
    return 'settings';
  };
  
  return (
    <Popover className="relative">
       <PopoverButton
          as="button"
          className={({ open }) =>
            cn(
              'flex items-center justify-center rounded p-1 outline-none dark:fill-marble-800',
              {
                [bg]: open,
              }
            )
          }
        >
          {({ open }) => <Icon className={cn({ [contrastFill]: open })} kind='outline' name="settings" />}
        </PopoverButton>
      <PopoverPanel
        className="flex origin-top -translate-y-2 flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        anchor="top start"
        transition
      >
        <div
          className={cn(
            'z-tag-suggestions flex flex-col',
            'w-full rounded-md p-2 focus:outline-none',
            'bg-mushroom-950 dark:bg-volcanic-150'
          )}
        >
          <Text styleAs="label" className="mb-2 text-mushroom-300 dark:text-marble-800">
            Answer Style
          </Text>
          {Object.keys(answerPreferences).length === 0 && Object.keys(answerPreferencesSwitches).length === 0 && (
            <Text as="span" styleAs="caption" className="text-mushroom-400 dark:text-volcanic-500">
              No answer style available
            </Text>
          )}
          
          <div className="flex">
            <div className="flex flex-col flex-1">
              {Object.keys(answerPreferences).map((preference, i) => (
                <div
                  key={preference}
                  className={cn(
                    'flex w-full items-start justify-between gap-x-2 px-1.5 py-3',
                    'focus:outline focus:outline-volcanic-300',
                    {
                      'border-b border-mushroom-800 dark:border-volcanic-300 md:w-[190px]':
                        i !== Object.keys(answerPreferences).length - 1,
                    }
                  )}
                >
                  <div className="flex justify-between flex-1 gap-x-2">
                    <div className="relative flex items-center self-center justify-center h-6 p-1 rounded bg-mushroom-800 dark:bg-volcanic-200">
                      <Icon
                        name={getIcon(preference)}
                        kind="outline"
                        size="md"
                        className="flex items-center fill-mushroom-300 dark:fill-marble-800"
                      />
                    </div>
                    <div className="flex-1">
                      <Slider
                        label={getSliderLabel(preference)}
                        min={0}
                        max={10}
                        step={1}
                        value={answerPreferences[preference as keyof typeof answerPreferences]}
                        onChange={(value: number) => handleSliderChange(preference, value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-px h-auto mx-2 bg-mushroom-800 dark:bg-volcanic-300"></div>

            <div className="flex flex-col justify-center px-2 gap-y-4">
              {Object.keys(answerPreferencesSwitches).map((preference, i) => (
                <div
                key={preference}
                className={cn(
                  'flex w-full items-start justify-between gap-x-2 px-1.5 py-3',
                  'focus:outline focus:outline-volcanic-300',
                  {
                    'border-b border-mushroom-800 dark:border-volcanic-300 md:w-[200px]':
                      i !== Object.keys(answerPreferencesSwitches).length - 1,
                  }
                )}
              >
                <div className="flex justify-between flex-1 gap-x-2">
                  <div className="flex gap-x-2">
                    <div className="relative flex items-center justify-center p-1 rounded bg-mushroom-800 dark:bg-volcanic-200">
                      <Icon
                        name={getIcon(preference)}
                        kind="outline"
                        size="sm"
                        className="flex items-center fill-mushroom-300 dark:fill-marble-800"
                      />
                      <div
                        className={cn(
                          'absolute -bottom-0.5 -right-0.5  size-2 rounded-full transition-colors duration-300',
                          {
                            'bg-success-300': answerPreferencesSwitches[preference as keyof typeof answerPreferencesSwitches],
                            'bg-mushroom-400 dark:bg-volcanic-600': !answerPreferencesSwitches[preference as keyof typeof answerPreferencesSwitches],
                          }
                        )}
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <Text as="span">{getSwitchLabel(preference)}</Text>
                    </div>
                  </div>
                  <Switch
                    theme={theme}
                    checked={answerPreferencesSwitches[preference as keyof typeof answerPreferencesSwitches]}
                    onChange={(checked) => handleToggle(checked)}
                    showCheckedState
                  />
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};
