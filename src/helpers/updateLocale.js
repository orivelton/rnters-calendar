const moment = require("moment");

const updateLocale = () => {
  moment.updateLocale('pt', {
    weekdaysMin : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_')
  });
}

export default updateLocale;
