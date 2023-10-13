const annonimo = process.argv.indexOf('-a') !== -1;
console.log(annonimo);

if(annonimo) {
    process.stdout.write('Fala Anônimo!\n');
    process.exit();
}else {
    process.stdout.write('Informe o seu nome: ');
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '');

        process.stdout.write(`Fala ${nome}!!\n`);
        process.exit();
    })
}