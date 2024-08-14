import { action, makeAutoObservable, observable } from 'mobx';

export class Emulator {
  cashInActive: boolean;
  bankCardTransactionActive: boolean;
  isVend: boolean;
  timers: number[];
  cashInHandler: ((event: KeyboardEvent) => void) | null;
  bankCardHandler: ((event: KeyboardEvent) => void) | null;
  vendHandler: ((event: KeyboardEvent) => void) | null;

  constructor() {
    this.cashInActive = false;
    this.bankCardTransactionActive = false;
    this.isVend = false;
    this.timers = [];
    this.cashInHandler = null;
    this.bankCardHandler = null;
    this.vendHandler = null;
    makeAutoObservable(this, {
      cashInActive: observable,
      bankCardTransactionActive: observable,
      isVend: observable,
    });
  }

  StartCashin(cb: (amount: number) => void) {
    console.log("Купюроприемник включен. Нажмите '1', чтобы внести 50, и '2' для внесения 100.");
    this.cashInActive = true;

    this.cashInHandler = action((event) => {
      if (!this.cashInActive) return;

      if (event.key === '1') {
        cb(50);
      } else if (event.key === '2') {
        cb(100);
      }
    });

    document.addEventListener('keydown', this.cashInHandler);
  }

  StopCashin() {
    console.log('Купюроприемник выключен.');
    this.cashInActive = false;

    if (this.cashInHandler) {
      document.removeEventListener('keydown', this.cashInHandler);
      this.cashInHandler = null;
    }
  }

  BankCardPurchase(
    amount: number,
    cb: (result: boolean) => void,
    display_cb: (message: string) => void
  ) {
    console.log('Транзакция на сумму: ' + amount);
    display_cb('Приложите карту к терминалу');
    this.bankCardTransactionActive = true;

    this.bankCardHandler = action((event) => {
      if (!this.bankCardTransactionActive) return;

      if (event.key === 'Enter') {
        display_cb('Обработка карты');
        this.timers.push(
          setTimeout(
            action(() => {
              display_cb('Связь с банком');
              this.timers.push(
                setTimeout(
                  action(() => {
                    display_cb('Оплата прошла успешно');
                    this.timers.push(
                      setTimeout(
                        action(() => {
                          this.bankCardTransactionActive = false;
                          cb(true);
                          this.removeBankCardHandler();
                        }),
                        500
                      )
                    );
                  }),
                  2000
                )
              );
            }),
            2000
          )
        );
      } else if (event.key === 'Escape') {
        this.clearTimeouts();
        cb(false);
        display_cb('Оплата не удалась');
        this.removeBankCardHandler();
        this.bankCardTransactionActive = false;
      }
    });

    document.addEventListener('keydown', this.bankCardHandler);
  }

  removeBankCardHandler() {
    if (this.bankCardHandler) {
      document.removeEventListener('keydown', this.bankCardHandler);
      this.bankCardHandler = null;
    }
  }

  BankCardCancel() {
    console.log('Операция по карте отменена.');
    this.bankCardTransactionActive = false;
    this.cashInActive = true;

    if (this.bankCardHandler) {
      document.removeEventListener('keydown', this.bankCardHandler);
      this.bankCardHandler = null;
    }
  }

  Vend(product_idx: number, cb: (result: boolean) => void) {
    this.isVend = true;
    console.log(`Выдача продукта с индексом: ${product_idx}. Нажмите 'x' для неуспешной выдачи.`);

    this.timers.push(
      setTimeout(
        action(() => {
          cb(true);
          console.log('Ваш товар готов!');
          this.removeVendHandler();
          this.isVend = false;
        }),
        90000
      )
    );

    this.vendHandler = action((event: KeyboardEvent) => {
      if (event.key === 'x' || event.key === 'X') {
        this.clearTimeouts();
        cb(false);
        console.log('Ошибка при выдаче продукта.');
        this.removeVendHandler();
        this.isVend = false;
      }
    });

    document.addEventListener('keydown', this.vendHandler);
  }

  removeVendHandler() {
    if (this.vendHandler) {
      document.removeEventListener('keydown', this.vendHandler);
      this.vendHandler = null;
    }
  }

  startCard() {
    this.bankCardTransactionActive = true;
  }

  private clearTimeouts() {
    this.timers.forEach((timer) => clearTimeout(timer));
  }
}
