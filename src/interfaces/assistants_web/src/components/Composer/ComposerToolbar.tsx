'use client';

import React from 'react';

import { AgentPublic, ToolDefinition } from '@/cohere-client';
import { DataSourceMenu, FilesMenu } from '@/components/Composer';
import { cn } from '@/utils';
import { AnswerPreferencesPanel } from './AnswerPreferencesPanel';

type Props = {
  agent?: AgentPublic;
  tools?: ToolDefinition[];
  onUploadFile: (files: File[]) => void;
};

/**
 * @description Renders the bottom toolbar of the composer that shows available and selected data sources.
 */
export const ComposerToolbar: React.FC<Props> = ({ agent, tools, onUploadFile }) => {
  return (
    <div
      className={cn(
        'flex gap-x-2 items-center',
        'border-t border-marble-950 dark:border-volcanic-300',
        'py-2 mx-2'
      )}
    >
      <FilesMenu onUploadFile={onUploadFile} />
      <AnswerPreferencesPanel agent={agent} />
      <DataSourceMenu agent={agent} tools={tools} />
    </div>
  );
};
