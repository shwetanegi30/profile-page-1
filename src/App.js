import React from 'react';
import Sidebar from './Component/SideNavBar'
import Settingbar from './Component/Setting/SettingSideBar'
import Header from './Component/Header'
import Content from './Component/ContentProfile/Content'
import styled from 'styled-components';
import './App.css'



const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 0 0 auto;
  display: flex;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <LeftSection>
        <Sidebar />
        <Settingbar />
      </LeftSection>
      <RightSection>
        <Header />
        <Content />
      </RightSection>
    </Container>
  );
}

export default App;
