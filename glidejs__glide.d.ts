declare module '@glidejs/glide' {
    export class Glide {
        constructor(selector: string, options?: any);
        mount(plugins?: any[]): void;
        destroy(): void;
        // Add other methods and properties as needed
    }
}