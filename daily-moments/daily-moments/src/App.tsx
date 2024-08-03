import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <IonApp>
      <HomePage/>
    </IonApp>
  );
};

export default App;
