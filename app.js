function verificarSenha(senha) {
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temCaracterEspecial = /[!@#$%^&*.{]/.test(senha);
    const temOitoCaracteres = senha.length >= 8;

    if (temMaiuscula && temMinuscula && temNumero && temCaracterEspecial && temOitoCaracteres) {
        return "A senha é boa.";
    } else {
        return "A senha não atende a todos os critérios.";
    }
}

alert(verificarSenha("Nicollas1^xyzz"))