import qrcode

# Texto a ser codificado
texto_qr = "https://www.twitch.tv/gaules"

# Criação do objeto QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Adicionar os dados ao QR Code
qr.add_data(texto_qr)
qr.make(fit=True)

# Criação de uma imagem do QR Code
img = qr.make_image(fill_color="black", black_color="white")

# Salvar a imagem do QR Code
img.save("seu_qrcode.png")