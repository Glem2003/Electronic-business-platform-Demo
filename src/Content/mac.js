export const macContent = ([
    {
        header: [
            { title: "Mac", subtitle: "你能想到的，Mac 就能做到。" }
        ],
        ads_text: [
            { text: "在我們的教育商店購買 MacBook Air 和 MacBook Pro 可享優惠。", link: "選購 > " }
        ],
        section_info: [
            {
                title: "來了解 Mac。",
                info_item: [
                    { title: "輕鬆啟用", subtitle: "容易用，容易愛上。", src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_medium.jpg" },
                    { title: "效能表現與電池續航", subtitle: "速度快，持續耐久", src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_medium.jpg" },
                    { title: "Mac 與 iPhone", subtitle: "夢幻組合", src: "https://www.apple.com/tw/mac/home/images/overview/consider/mac_iphone__gh1tblkt6bqm_medium.jpg" },
                    { title: "相容性", subtitle: (<>Mac 可執行<br />你常用的 App。</>), src: "https://www.apple.com/tw/mac/home/images/overview/consider/mac_compatibility__cu59oukz81ci_medium.jpg" },
                    { title: "隱私權與安全保護", subtitle: (<>你的私事，<br />誰都無權知道。</>), src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg" },
                    { title: "經久耐用", subtitle: (<>精心打造<br />經得起時間考驗。</>), src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_durability__epiwcuk7zkeq_xlarge.jpg" },
                    { title: "Apple 價值理念", subtitle: (<>我們做的每件事<br />都體現我們的價值理念。</>), src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_values__c9gck9qi4kia_xlarge.jpg" },
                ]
            }
        ],
        section_3: [
            {
                title: "探索各個產品系列。",
                subtitle: "比較所有機型",
                selectList: ["筆記型電腦", "桌上型電腦", "顯示器"],
                product_info_item: [
                    {
                        laptops: [
                            {
                                src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_medium_2x.png",
                                alt: "MacBook Air",
                                color: ["white", "black"],
                                postscript: "全新 M3 機型",
                                title: (<>MacBook Air<br />13 吋與 15 吋</>),
                                subtitle: "M2 或 M3 晶片",
                                text: (<>超薄超快，<br />到哪都能工作、玩樂或創作。</>),
                                price: "NT$32,900 起",
                                btn: ["進一步了解", "購買"],
                                cardTitle: "13.6 吋或 15.3 吋",
                                cardText: (<>Liquid Retina 顯示器具備 500 尼特亮度，<br />並支援 10 億種顏色</>),
                                productInfoItem:
                                    [
                                        { text: "Apple M2 或 M3 晶片", src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large_2x.png" },
                                        { text: (<><h4>最長可達</h4><h1>18 小時</h1><h4>電池使用時間</h4></>) },
                                        { text: (<><h1>4 個連接埠</h1><h4>2 個 Thunderbolt / USB 4、耳機插孔、<br />MagSafe</h4></>) },
                                        { text: (<><h1>1.24 公斤或 1.51 公斤</h1><h4>重量</h4></>) }
                                    ]
                            },
                            {
                                src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_medium_2x.png",
                                alt: "MacBook Pro",
                                color: ["white", "black", "grey"],
                                title: (<>MacBook Pro<br />14 吋與 16 吋</>),
                                subtitle: "M3、M3 Pro 或 M3 Max 晶片",
                                text: (<>最先進的 Mac 筆電，<br />戰勝各種艱鉅任務。</>),
                                price: "NT$54,900 起",
                                btn: ["進一步了解", "購買"],
                                cardTitle: "14.2 吋或 16.2 吋",
                                cardText: (<>Liquid Retina XDR 顯示器具備 1000 尼特<br />HDR 與 600 尼特 SDR 亮度，以及最高可達<br />120Hz 的更新頻率</>),
                                productInfoItem:
                                    [
                                        { text: "Apple M3、M3 Pro 或 M3 Max 晶片", src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m3_pro_max__wg8d2vblzmqi_large_2x.png" },
                                        { text: (<><h4>最長可達</h4><h1>22 小時</h1><h4>電池使用時間</h4></>) },
                                        { text: (<><h4>最多可達</h4><h1>7 個連接埠</h1><h4>2 個 Thunderbolt / USB 4 或 3 個<h4>Thunderbolt 4、HDMI、SDXC、耳機插孔、</h4>MagSafe</h4></>) },
                                        { text: (<><h1>1.55 公斤或 2.14 公斤</h1><h4>重量</h4></>) }
                                    ]
                            }
                        ],
                        desktops: [
                            {
                                src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_imac_24__inq0od011wuq_medium_2x.png",
                                alt: "iMac",
                                color: ["white", "black"],
                                title: "iMac",
                                subtitle: "M3 晶片",
                                text: "搶眼出色的一體成型機，發揮創造力，也展現生產力。",
                                price: "NT$44,900 起",
                                btn: ["進一步了解", "購買"],
                                productInfoItem:
                                    [
                                        { text: (<><h1>24 吋</h1>4.5K Retina 顯示器具備 500 尼特亮度，可顯示清晰且生動的細節</>) },
                                        { text: "Apple M3 晶片", src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m3__geq4mv9q8qeu_large_2x.png" },
                                        { text: (<><span>-</span></>) },
                                        { text: (<><h4>最多可達</h4><h1>6 個連接埠</h1><h4>2 個 Thunderbolt / USB 4、最多可達 2 個 USB 3、<br />Gigabit 乙太網路、耳機插孔</h4></>) },
                                    ]
                            },
                            {
                                src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_mini__c4284n3j25w2_medium_2x.png",
                                alt: "Mac mini",
                                title: "Mac mini",
                                subtitle: "M2 或 M2 Pro 晶片",
                                text: "最超值的 Mac 桌上型電腦，有超水準的效能表現。",
                                price: "NT$18,900 起",
                                btn: ["進一步了解", "購買"],
                                productInfoItem:
                                    [
                                        { text: (<><span>-</span></>) },
                                        { text: "Apple M2 或 M2 Pro 晶片", src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_pro__c5ftjeskmwuq_large_2x.png" },
                                        { text: (<><span>-</span></>) },
                                        { text: (<><h4>最多可達</h4><h1>9 個連接埠</h1><h4>最多可達 4 個 Thunderbolt 4、2 個 USB‑A、HDMI、Gigabit 乙太<br />網路、耳機插孔</h4></>) },
                                    ]
                            },
                            {
                                src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_large_2x.png",
                                alt: "Mac Studio",
                                title: "Mac Studio",
                                subtitle: "M2 Max 或 M2 Ultra 晶片",
                                text: (<>強大效能與廣泛連結力，<br />為專業工作流程而生。</>),
                                price: "NT$64,999 起",
                                btn: ["進一步了解", "購買"],
                                productInfoItem:
                                    [
                                        { text: (<><span>-</span></>) },
                                        { text: "Apple M2 Max 或 M2 Ultra 晶片", src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_max_m2_ultra__d0wnaf44m6qa_large_2x.png" },
                                        { text: (<><span>-</span></>) },
                                        { text: (<><h1>12 個連接埠</h1><h4>最多可達 6 個 Thunderbolt 4、2 個 USB‑A、最多可達 2 個<br />USB‑C、HDMI、10Gb 乙太網路、SDXC、耳機插孔</h4></>) },
                                    ]
                            },
                            {
                                src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_large_2x.png",
                                alt: "Mac Pro",
                                title: "Mac Pro",
                                subtitle: "M2 Ultra 晶片",
                                text: (<>具 PCIe 擴充性的專業工作站，<br />駕馭最繁重的工作流程。</>),
                                price: "NT$229,900 起",
                                btn: ["進一步了解", "購買"],
                                productInfoItem:
                                    [
                                        { text: (<><span>-</span></>) },
                                        { text: "Apple M2 Ultra 晶片", src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_ultra__4mmsok50gvmu_large_2x.png" },
                                        { text: (<><h1>PCIe</h1><h4>配備七個擴充槽，其中六個為 PCIe gen 4</h4></>) },
                                        { text: (<><h1>18 個連接埠</h1><h4>8 個 Thunderbolt 4、3 個 USB‑A、2 個 HDMI、2 個 10Gb 乙太<br />網路、2 個 Serial ATA、耳機插孔</h4></>) },
                                    ]
                            },
                        ],
                        displays: [
                            {
                                src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large_2x.png",
                                alt: "Studio Display",
                                title: "Studio Display",
                                text: (<>5K Retina 顯示器，<br />自帶絕佳相機與音響。</>),
                                price: "NT$45,900 起",
                                btn: ["進一步了解", "購買"],
                                productInfoItem:
                                    [
                                        { text: (<><h1>27 吋</h1>Retina 顯示器具備 5120 x 2880 像素</>) },
                                        { text: (<><h1>5K</h1><h4>Retina 顯示器，呈現絢麗色彩與令人驚歎的細節</h4></>) },
                                        { text: (<><h1>600 尼特</h1><h4>亮度，呈現亮麗色彩</h4></>) },
                                        { text: "1200 萬像素超廣角相機具備人物居中功能，帶來更自然的視訊通話", src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_video__br4ndidbu11e_large_2x.png" },
                                        { text: (<>原彩顯示、抗反射鍍膜，並可選配 Nano-texture 玻璃，在任何光線下<br />都能享有最佳的觀賞體驗</>), src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large_2x.png" },
                                        { text: (<><h1>4 個連接埠</h1>Thunderbolt 3 (USB‑C)、3 個 USB‑C</>), src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large_2x.png" },
                                    ]
                            },
                            {
                                src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_pro_display__duklzyfwl92e_large_2x.png",
                                alt: "Pro Display XDR",
                                title: "Pro Display XDR",
                                text: (<>先進的 6K XDR 顯示器，<br />適用於專業工作流程。</>),
                                price: "NT$159,900 起",
                                btn: ["進一步了解", "購買"],
                                productInfoItem:
                                    [
                                        { text: (<><h1>32 吋</h1>Retina XDR 顯示器具備 6016 x 3384 像素</>) },
                                        { text: (<><h1>6K</h1><h4>Retina XDR 顯示器，帶來最引人入勝的觀看體驗</h4></>) },
                                        { text: (<><h1>1000 尼特</h1><h4>亮度，色彩絢麗，峰值亮度最高可達 1600 尼特</h4></>) },
                                        { text: (<><span>-</span></>) },
                                        { text: (<>原彩顯示、抗反射鍍膜，並可選配 Nano-texture 玻璃，在任何光線下<br />都能享有最佳的觀賞體驗</>), src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large_2x.png" },
                                        { text: (<><h1>4 個連接埠</h1>Thunderbolt 3 (USB‑C)、3 個 USB‑C</>), src: "https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large_2x.png" },
                                    ]
                            },
                        ]
                    },
                ]
            }
        ],
        section4: [
            {
                title: "Mac 的必要裝備。",
                subtitle: "所有 Mac 配件",
                list_item:[
                    {
                        title:"Mac 配件",
                        text:"探索鍵盤、滑鼠與其他必備配件。",
                        link:"選購 Mac 配件",
                        src:"https://www.apple.com/tw/mac/home/images/overview/essentials/essentials_accessories__dglhsic54owi_large_2x.jpg"
                    },
                    {
                        title:"Studio Display",
                        text:"27 吋 5K Retina 顯示器，可與任何 Mac 聯手漂亮出擊。",
                        link:"進一步了解",
                        src:"https://www.apple.com/v/mac/home/by/images/overview/essentials/essentials_display__bk3i351qm0c2_large_2x.jpg"
                    }
                ]
            }
        ],
        product_information:[
            {
                title:"大家的好夥伴。",
                list_item:[
                    {
                        title:"Mac 與 iPhone",
                        text:"iPhone 的來電或訊息，直接在 Mac 上就能接聽或回覆。拷貝 iPhone 裡的圖片、影片或文字，接著貼到你手邊 Mac 的另一個 app 裡。搭配 iCloud，就能在 iPhone 或 Mac 上存取常用的檔案。好用之處，還有更多。"
                    },
                    {
                        title:"Mac 與 iPad",
                        text:"在 iPad 畫圖，立即就在 Mac 看到。或者，也能把 iPad 當作第二部顯示器，在一個螢幕上工作，同時參考另一個螢幕的內容。 你甚至還能在 iPad 上建立 Final Cut Pro 計畫案，然後在 Mac 上接著做。"
                    },
                    {
                        title:"Mac 與 Apple Watch",
                        text:"有了「自動解鎖」功能，當你戴著 Apple Watch 時，能自動登入自己的 Mac，無須輸入密碼。"
                    }
                ]
            }
        ]
    }
])