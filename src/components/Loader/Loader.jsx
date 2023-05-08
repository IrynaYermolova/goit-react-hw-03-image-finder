
import { InfinitySpin } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

function Loader() {
  return (
    <Spiner>
      <InfinitySpin width="400" color="#4fa94d" />
    </Spiner>
  );
}

export default Loader;