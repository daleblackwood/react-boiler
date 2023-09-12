declare module "vite-plugin-inline-css-modules" {
    function css(...args: string[]): Record<string, string>
}

import type { Children as ReactChildren } from "react"

declare global {
    type Children = ReactChildren;
} 