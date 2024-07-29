'use client';

import React, { forwardRef, Ref } from 'react';


interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  sectionType: '1'|'2'|'3'|'4'|'5'; // Menentukan tipe section
  id: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ sectionType, style, id, ...props }, ref: Ref<HTMLDivElement>) => {
    let sectionClasses;

    switch (sectionType) {
      case '1':
        
        sectionClasses = 'h-screen flex justify-center items-center text-center ';
        break;
      case '2':
        sectionClasses = 'h-screen flex justify-center items-center text-center bg-zinc-50 dark:bg-zinc-900';
        break;
      case '3':
        sectionClasses = 'h-screen flex justify-center items-center text-center bg-zinc-50 dark:bg-zinc-900';
        break;
        case '4':
        sectionClasses = 'h-screen flex justify-center items-center text-center bg-zinc-50 dark:bg-zinc-900';
        break;
        case '5':
        sectionClasses = 'h-screen flex justify-center items-center text-center bg-zinc-50 dark:bg-zinc-900';
        break;
      default:
        sectionClasses = 'h-screen flex justify-center items-center text-center bg-[#ff6f61]'; // Fallback
    }

    return (
      <div ref={ref} id={id} className={sectionClasses} style={style} {...props}>
        {props.children}
      </div>
    );
  }
);

Section.displayName = 'Section';

export default Section;
