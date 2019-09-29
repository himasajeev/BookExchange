import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import styled from '@emotion/styled';
import BookIcon from '@material-ui/icons/Book';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonIcon from '@material-ui/icons/Person';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Paper from '@material-ui/core/Paper';
import Loading from '../../components/Loading/Loading';
import { PADDING } from '../../styles/padding';
import { STATUS_TRANSLATIONS } from '../../constants/statusTranslations';
import { MAX_WIDTH } from '../../styles/globalVariables';
import { paymentsTranslations } from '../../constants/paymentsTranslations';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: ${PADDING.BASE_LARGER} auto;
`;

const StyledPaper = styled(Paper)`
  padding: ${PADDING.LARGE};
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  & span {
    display: block;
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: ${PADDING.BASE};
`;

const StyledSection = styled.section`
  margin: ${PADDING.LARGE} 0;
`;

const StyledSectionTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: ${PADDING.SMALL};
`;

const StyledPaymentContainer = styled.div`
  margin-bottom: ${PADDING.BASE};
`;

const nullToZero = value => {
  if (value === null) return 0;
  return value;
};

const Overview = ({
  token,
  getOverview,
  getUserInfo,
  userInfo,
  booksToBuy,
  booksToSell,
  sell,
  buy,
  payments,
  isLoading,
}) => {
  React.useEffect(() => {
    getOverview(token);
    getUserInfo(token);
  }, [getOverview, getUserInfo, token]);

  const { toReceive, received, sold, taken } = sell;
  const { ordered, bought, orderedAmount, boughtAmount } = buy;
  const { name, surname, year, email } = userInfo;

  return (
    <StyledWrapper>
      <Loading isLoading={isLoading}>
        <StyledPaper>
          <StyledTitle>Podsumowanie konta</StyledTitle>
          {userInfo && (
            <section>
              <StyledSectionTitle>Dane</StyledSectionTitle>
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
                  <ListItemText primary="Nr. Indexu" secondary={year} />
                </ListItem>
              </List>
            </section>
          )}
          <StyledSection>
            <StyledSectionTitle>Sprzedaż</StyledSectionTitle>
            <span>Do przyniesienia: {nullToZero(toReceive)}</span>
            <span>Przyniesione: {nullToZero(received)}</span>
            <span>Sprzedane: {nullToZero(sold)}</span>
            <span>Odebrane: {nullToZero(taken)}</span>
          </StyledSection>
          <StyledSection>
            <StyledSectionTitle>Zakupy</StyledSectionTitle>
            <span>Ilosc zamówionych: {nullToZero(ordered)}</span>
            <span>Do zapłacenia: {`${nullToZero(orderedAmount)} zł`}</span>
            <span>Kupiono: {`${nullToZero(bought)}`}</span>
            <span>Zaplacono: {`${nullToZero(boughtAmount)} zł`}</span>
          </StyledSection>
          <StyledSection>
            <StyledSectionTitle>Platności</StyledSectionTitle>
            {payments.length > 0 ? (
              payments.map(payment => (
                <StyledPaymentContainer key={payment.added}>
                  <span>Data płatności: {payment.added}</span>
                  <span>Opis: {payment.description}</span>
                  <span>Zapłacono: {`${nullToZero(payment.amount)} zł`}</span>
                  <span>
                    Rodzaj transakcji: {paymentsTranslations[payment.transType]}
                  </span>
                </StyledPaymentContainer>
              ))
            ) : (
              <span>Brak płatności na giełdzie.</span>
            )}
          </StyledSection>
          {booksToBuy.length > 0 && (
            <StyledSection data-testid="books_to_buy">
              <StyledSectionTitle>Ksiażki do kupienia</StyledSectionTitle>
              <List>
                {booksToBuy.map(book => (
                  <ListItem key={book.protId}>
                    <ListItemIcon>
                      <Avatar>
                        <BookIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={book.title}
                      secondary={STATUS_TRANSLATIONS[book.state]}
                    />
                  </ListItem>
                ))}
              </List>
            </StyledSection>
          )}
          {booksToSell.length > 0 && (
            <StyledSection data-testid="books_to_sell">
              <StyledSectionTitle>Ksiażki do sprzedania</StyledSectionTitle>
              <List>
                {booksToSell.map(book => (
                  <ListItem key={book.protId}>
                    <ListItemIcon>
                      <Avatar>
                        <BookIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={book.title}
                      secondary={STATUS_TRANSLATIONS[book.state]}
                    />
                  </ListItem>
                ))}
              </List>
            </StyledSection>
          )}
          <div />
        </StyledPaper>
      </Loading>
    </StyledWrapper>
  );
};

Overview.defaultProps = {
  token: '',
  userInfo: {},
  booksToBuy: [],
  booksToSell: [],
  sell: {},
  buy: {},
  payments: [],
};

Overview.propTypes = {
  token: PropTypes.string,
  getOverview: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    email: PropTypes.string,
  }),
  booksToBuy: PropTypes.arrayOf(PropTypes.shape({})),
  booksToSell: PropTypes.arrayOf(PropTypes.shape({})),
  sell: PropTypes.shape({
    toReceive: PropTypes.string,
    received: PropTypes.string,
    sold: PropTypes.string,
    taken: PropTypes.string,
  }),
  buy: PropTypes.shape({
    ordered: PropTypes.string,
    bought: PropTypes.string,
    orderedAmount: PropTypes.string,
    boughtAmount: PropTypes.string,
  }),
  payments: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
};

export default Overview;
