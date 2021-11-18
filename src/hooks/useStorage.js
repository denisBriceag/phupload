import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection('images');

    storageRef.put(file).on('state_change',
      (snap) => {
        console.log(snap)
        let percent = Math.floor((snap.bytesTransferred / snap.totalBytes) * 100);
        setProgress(percent);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const created = timestamp();
        await collectionRef.add({ url, created })
        setUrl(url)
      })

  }, [file]);

  return { progress, url, error };
}

export default useStorage;