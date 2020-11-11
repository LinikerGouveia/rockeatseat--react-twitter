import React from 'react';

import Feed from '../Feed';


import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Liniker Gouveia</h1>
        <h2>@liniker</h2>

        <p>
          Desenvolvedor Web
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 06 de julho de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>924</strong>
          </span>
          <span>
            <strong>6732 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed>
        
      </Feed>
  
    </Container>
  );
};

export default ProfilePage;