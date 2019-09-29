import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { isEmpty } from 'lodash';
import { StyledSectionTitleNoPadding } from './OverviewStyled';

const AccountData = ({ userInfo }) => {
  const { name, surname, year, email } = userInfo;

  if (isEmpty(userInfo)) return null;

  return (
    <section>
      <StyledSectionTitleNoPadding>Dane</StyledSectionTitleNoPadding>
      <List>
        <ListItem>
          <ListItemIcon>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Imię" secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar>
              <SupervisorAccountIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Nazwisko" secondary={surname} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar>
              <AlternateEmailIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar>
              <VpnKeyIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Nr. Indeksu" secondary={year} />
        </ListItem>
      </List>
    </section>
  );
};

AccountData.defaultProps = {
  userInfo: {},
};

AccountData.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    year: PropTypes.string,
    email: PropTypes.string,
  }),
};
export default AccountData;
