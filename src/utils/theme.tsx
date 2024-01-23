export type Theme = {
  dark: boolean;
  colors: {
    primary: string,
    background: string,
    card: string,
    text: string,
    border: string,
    notification: string,
    placeholder: string,
    descriptionText: string,
    buttonBackground: string,
    income: string,
    incomeBackground: string,
    expense: string,
    expenseBackground: string,
  };
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#0A84FF',
    background: '#141a1f',
    card: '#202934',
    text: '#fbfefe',
    border: '#272729',
    notification: '#FF453A',
    placeholder: '#9a9ea4',
    descriptionText: '#9cabc2',
    buttonBackground: '#344457',
    income: '#2ecc71',
    incomeBackground: 'rgba(46, 204, 113, 0.2)',
    expense: '#e74c3c',
    expenseBackground: 'rgba(231, 76, 60, 0.2)'

  }
};


export const defaultTheme: Theme = {
  dark: false,
  colors: {
    primary: '#007AFF',
    background: '#f9f9f9',
    card: '#ffffff',
    text: '#083371',
    border: '#D8D8D8',
    notification: '#FF3B30',
    placeholder: '#9a9ea4',
    descriptionText: '#818892',
    buttonBackground: '#f1f3f7',
    income: '#2ecc71',
    incomeBackground: 'rgba(46, 204, 113, 0.2)',
    expense: '#e74c3c',
    expenseBackground: 'rgba(231, 76, 60, 0.2)'

  }

};