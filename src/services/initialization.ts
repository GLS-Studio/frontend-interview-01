import Amplify from "@aws-amplify/core";

const awsConfig = {
  Auth: {
    identityPoolId: "eu-central-1:7e300194-7fdc-49e2-a95c-593be252bd90",
    region: "eu-central-1",
    userPoolId: "eu-central-1_pqs7LIVVI",
    userPoolWebClientId: "39ht1sitlvg3fnpkfsjpu1k81v",
  },
};

export async function initAmplify() {
  await Amplify.configure(awsConfig);
}
