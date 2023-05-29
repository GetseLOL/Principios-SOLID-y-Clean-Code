interface Ave {
  comer(): void;
  correr(): void;
}

interface AveVoladora {
  volar(): void;
}

interface AveNadadora {
  swim(): void;
}

class Tucan implements Ave, AveVoladora {
  public volar(): void {}
  public comer(): void {}
  public correr(): void {}
}

class Colibri implements Ave, AveVoladora {
  public volar(): void {}
  public comer(): void {}
  public correr(): void {}
}

class Pinguino implements Ave, AveNadadora {
  public swim(): void {}
  public comer(): void {}
  public correr(): void {}
}
