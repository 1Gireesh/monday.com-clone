import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

let arr = ["https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/7_status.mp4",
    "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/1_Views.mp4",
    "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/2_Dashboards.mp4",
    "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/4_Integrations.mp4",
    "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/3_Automations.mp4",
    "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/5_Apps.mp4",
    "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/6_Docs.mp4"
];

let paras = [
    {
        h: "Boards",
        p: "Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.",
        i: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/board_icon.svg"
    },
    {
        h: "Views",
        p: "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.",
        i: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/views_icon.svg"
    },
    {
        h: "Dashboards",
        p: "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.",
        i: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg"
    },
    {
        h: "Integrations",
        p: "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
        i: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg"
    },
    {
        h: "Automations",
        p: "th all your favorite tools and get moConnect monday.com wire work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
        i: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg"
    },
    {
        h: "Apps",
        p: "Docs favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
        i: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg"
    },
    {
        h: "Docs",
        p: ".com with all your favorit e tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
        i: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg"
    }
]

export default function SliderPage() {
    const [c,setC] = useState(0);
    

    return (
        <Box m="50px">
            <Center>
                <Flex gap="20px">
                    {
                        paras.map((e,i) => {
                            return (<Flex 
                            w="100px"
                            onClick={()=>setC(i)}
                            style={{borderBottom: c===i? "4px solid blue":"",
                                cursor:"pointer"
                        }}
                            key={i} direction="column" alignItems="center" justifyContent="center">
                                <Image w="30px" src={e.i} alt=""></Image>
                                <Text>{e.h}</Text>
                            </Flex>)
                        })
                    }
                </Flex>
            </Center>
            <Center>
                <Flex alignItems="center">
                    <video id='bla' width="650" height="400"  autoPlay  muted >
                        <source src={arr[4]} type="video/mp4" />
                    </video>
                    <Box w="30vw" m="40px" mt="70px" color="blue">
                        <Text fontSize="3xl">{paras[c].h}</Text>
                        <Text>{paras[c].p}</Text>
                    </Box>

                </Flex>
            </Center>
        </Box>
    )
}
