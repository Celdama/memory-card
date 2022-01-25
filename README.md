# Memory Card

- [] scoreboard => which counts the current score
- [] best score => which shows the best score
- [] couple of card that display images and info text

- [] a function that displays the cards in a random order anytime a user click one => be sure to invoke function when the component mount

## Components needed

<Header />
<App />
<Scoreboard currentScore bestScore />
<Cards eachCard />
<Footer />

## Organizations

<App>
  <Header title />
  <App> => makeApiCallHere()
    <ScoreBoard currentScore bestScore>
    <Cards>
      <Card info />
      <Card info />
      <Card info />
      <Card info />
    </Cards>
  </App>
  <Footer copyright />
  <GlobalStyle useStyledComponents>
</App>
