import { twMerge } from "tailwind-merge";
import React, { ReactElement } from "react";

interface PropsWithClassName {
  className?: string;
  [key: string]: any; // Para permitir otras props
}

/**
 * Clone React element with merged Tailwind classes
 * @param element React element to clone
 * @param classNames Tailwind CSS classnames to merge
 * @returns Cloned React element with merged classes
 */
export function cloneElement(
  element: ReactElement<PropsWithClassName>,
  classNames: string
): ReactElement<PropsWithClassName> {
  return React.cloneElement(element, {
    ...element.props,
    className: twMerge(element.props.className, classNames)
  });
}