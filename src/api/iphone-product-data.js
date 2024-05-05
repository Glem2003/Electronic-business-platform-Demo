export default function() {
    return Promise.resolve({
        json: () =>
            Promise.resolve([
                {
                    id: 0,
                    title: "iPhone 15 Pro",
                    image_src: "/images/mac.png",
                },
                {
                    id: 1,
                    title: "iPhone 15",
                    image_src: "/images/mac.png",
                },
                {
                    id: 2,
                    title: "iPhone 14",
                    image_src: "/images/mac.png",
                },
                {
                    id: 3,
                    title: "iPhone 13",
                    image_src: "/images/mac.png",
                },
                {
                    id: 4,
                    title: "iPhone SE",
                    image_src: "/images/mac.png",
                }
            ])
    })
}