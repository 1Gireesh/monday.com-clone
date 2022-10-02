import { Box, Container, Flex, HStack, Image, Spacer, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../css/work.css"
import One from "./workComponts/1"
import Two from "./workComponts/2"
import Three from "./workComponts/3"
import Four from "./workComponts/4"
import Five from "./workComponts/5"

export default function Work() {


  let [icon, setIcon] = useState([]);
  let [iconi, setIconi] = useState(1);

  function handleClick(nu) {
    for (let i of icon) i = 0;
    icon[nu] = 1;
    setIcon(icon);
    setIconi(nu);
    let imgs = document.querySelectorAll('.sidebarChild>img');

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.background = ""
    }

    imgs[nu - 1].style.background = "black";

  }

  useEffect(()=>{

  })

  const comps = [One, Two, Three, Four, Five, 'Six', 'Seven', "Eight", "Nine", "Ten"];

  return (
    <Box>
      <HStack>

        {/* sidbar */}
        <VStack className='sidebar'>

          <VStack className='sidebarChild'>
            <img onClick={(e) => { handleClick(1) }} src="https://cdn.monday.com/images/logos/monday_logo_icon.png" alt="" />
            <img onClick={(e) => { handleClick(2) }} src="https://img.icons8.com/external-sbts2018-flat-sbts2018/2x/external-crm-basic-ui-elements-2.4-sbts2018-flat-sbts2018.png" alt="" />
            <img onClick={(e) => { handleClick(3) }} src="https://img.icons8.com/office/2x/appointment-reminders.png" alt="" />
            <img onClick={(e) => { handleClick(4) }} src="https://img.icons8.com/ultraviolet/2x/inbox.png" alt="" />
            <img onClick={(e) => { handleClick(5) }} src="https://img.icons8.com/office/2x/menu--v2.png" alt="" />
            <img onClick={(e) => { handleClick(6) }} src="https://img.icons8.com/emoji/2x/star-emoji.png" alt="" />
            <Box className='spacer'>see plans</Box>
            <img onClick={(e) => { handleClick(7) }} src="https://img.icons8.com/external-flat-berkahicon/2x/external-Invite-online-meeting-flat-berkahicon.png" alt="" />
            <img onClick={(e) => { handleClick(8) }} src="https://img.icons8.com/cotton/2x/search.png" alt="" />
            <img onClick={(e) => { handleClick(9) }} src="https://img.icons8.com/external-others-inmotus-design/2x/external-Question-keyboard-others-inmotus-design.png" alt="" />
            <img onClick={(e) => { handleClick(10) }} src="https://img.icons8.com/color/2x/circled-menu.png" alt="" />
            <img onClick={(e) => { handleClick(11) }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHtqsQizwi4syQ1AyhMVid6SO78Nfdd-meQ&usqp=CAU" alt="" />
          </VStack>

        </VStack>



        {/* main page */}
        <Container className='mainSpace'>


          {(iconi == 1) && <One></One>}
          {(iconi == 2) && <Two></Two>}
          {(iconi == 3) && <Three></Three>}
          {(iconi == 4) && <Four></Four>}
          {(iconi == 5) && <Five></Five>}



        </Container>

      </HStack>
    </Box>
  )
}
