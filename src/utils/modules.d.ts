declare module "vite-plugin-inline-css-modules" {
    function css(...args: string[]): Record<string, string>
}