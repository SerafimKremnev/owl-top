/// <reference types="next" />
/// <reference types="next/types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
// this file is conditionally added/removed to next-env.d.ts
// if the static image import handling is enabled

declare module '*.png' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}


declare module '*.jpg' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}

declare module '*.jpeg' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}

declare module '*.gif' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}

declare module '*.webp' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}

declare module '*.avif' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}

declare module '*.ico' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}

declare module '*.bmp' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}
