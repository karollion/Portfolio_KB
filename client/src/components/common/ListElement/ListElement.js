import { useTranslation } from 'react-i18next';

const ListElement = props => {
  const { t } = useTranslation();

  if (!props.name) {return (<li>{t(`resume.skills.${props.id}.name`)}</li>);}
  else {return (
    <li>{props.name}</li>
  );}
};

export default ListElement;
