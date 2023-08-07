// const path = require('path');
// require('dotenv').config({ path: path.join(__dirname, '.env') });

// const FtpDeploy = require('ftp-deploy');
// const { execSync } = require('child_process');

// async function main() {
 //  console.log('FTP_USER:', process.env.FTP_USER);
 //  console.log('FTP_PASS:', process.env.FTP_PASS);
  // try {
    // Build the Next.js application to generate the static files in the "out" directory
   //  const buildCommand = 'npm run build';
   //  execSync(buildCommand, { stdio: 'inherit' });

   // const outDir = path.join(process.cwd(), 'out');

   // await new FtpDeploy().deploy({
    //  user: process.env.FTP_USER,
    //  password: process.env.FTP_PASS,
    //  host: process.env.FTP_HOST,
    //  port: process.env.FTP_PORT,

    //  localRoot: outDir,
    //  remoteRoot: '/',

    //  include: ['*', '**/*'],
    //  exclude: [],

     // deleteRemote: false,
    //  forcePasv: true,
  //  });

  //  console.log('Successfully deployed site');
  //  return 0;
//  } catch (e) {
 //   console.error('An error occurred during deployment:', e);
 //   return 1;
//  }
// }

// main().then((code) => process.exit(code)); 
