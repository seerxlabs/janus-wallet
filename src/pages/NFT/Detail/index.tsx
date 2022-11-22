import styles from './index.module.scss';
import pictureNFT from './img/nft.webp'
import PageTitle from '../../../components/PageTitle';
import BackBar from '../../../components/BackBar';

function NFTDetail() {
  return (
      <div>
          <BackBar/>
          <PageTitle ext={false} sub={false} name={'NFT Details'}/>
      </div>
  );
}

export default NFTDetail;
