const analyticsAdmin = require('@google-analytics/admin');

const express = require('express')
const app = express()
const port = 3000



// app.get('/', (req, res) => {
//   res.send('hey');
// })

app.listen(port, () => {
  //console.log(`matthewbarton.dev listening at http://localhost:${port}`)
  console.log('app listening on port 3000');
})

app.use(express.static('public'))

async function main() {
  // Instantiates a client using default credentials.
  // TODO(developer): uncomment and use the following line in order to
  //  manually set the path to the service account JSON file instead of
  //  using the value from the GOOGLE_APPLICATION_CREDENTIALS environment
  //  variable.
  const analyticsAdminClient = new analyticsAdmin.AnalyticsAdminServiceClient(
      {keyFilename: "C:/Users/charg/dev/matthewbarton-dev-analytics-c26ed17c44ce.json"});
  //const analyticsAdminClient = new analyticsAdmin.AnalyticsAdminServiceClient();

  // Calls listAccounts() method of the Google Analytics Admin API and prints
  // the response for each account.
  const [accounts] = await analyticsAdminClient.listAccounts();

  console.log('Accounts:');
  accounts.forEach(account => {
    console.log(account);
  });
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
