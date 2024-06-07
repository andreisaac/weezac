import { render } from '@react-email/render';
import ContactEmail from '@emails/contact';


export const renderHtml = (name, organization) => {
  return render(
    <ContactEmail name={name} organization={organization} />,
    {pretty: true}
  );
}; 

export const renderText = (name, organization) => {
  return render(
    <ContactEmail name={name} organization={organization} />,
    {plainText: true}
  );
}; 
