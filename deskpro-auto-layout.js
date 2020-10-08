import xapi from 'xapi';

const shareStatus = xapi.Status.Conference.Presentation.Mode.on((state) => {
  console.log(`Presentation state changed to: ${state}`);
  if(state=="Off"){
    xapi.command('Video Layout LayoutFamily Set', {
                              Target: 'Local',
                              LayoutFamily: 'Equal',
                });
  }
  else
  {
    xapi.command('Video Layout LayoutFamily Set', {
                              Target: 'Local',
                              LayoutFamily: 'Prominent',
                });
  }
 });
