import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])



  return (
    <div>
      <div>{progress}%</div>
      <div className="progress-bar-div">
        <motion.div className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }} >
        </motion.div>
      </div>
    </div>
  )

}

export default ProgressBar;