import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe0A32FA89dC23aB381815088d53dBAC33Ab61424'
);

export default instance;
