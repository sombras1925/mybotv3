exports.wait = () => {
        return `⌛ Mientras esté en proceso, tenga paciencia ⌛`
}

exports.timeEnd = () => {
        return `El tiempo se acaba`
}

exports.succsess = () => {
        return `✔️ FUNCIONO TODO PUT@ ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *nivelación activada*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *la nivelación está deshabilitada*`
}

exports.levelnol = () => {
        return `*NIVEL TODAVIA* 0 °-°`
}

exports.stick = () => {
        return `[❗] se produjo un error al convertir la imagen al as sticker ❌`
}

exports.Iv = () => {
        return `❌ LINK INVALIDO🧐:(  ❌`
}

exports.group = () => {
        return `[❗] SOLO PARA GRUPOS PUT@ ❌`
}

exports.ownerG = () => {
        return `[❗] SOLO PROPIETARIO❌`
}

exports.ownerB = () => {
        return `[❗] Quien edta jodiendo?❌`
}

exports.admin = () => {
        return `[❗] Ehh... Solo eres un miembro no seas subnormal❌`
}

exports.Badmin = () => {
        return `[❗] Entonces, el administrador me dirá primero ❌`
}

exports.daftarB = (prefix) => {
        return `── 「TODAVÍA NO ESTÁ REGISTRADO」 ── \ n¡Hola bastardos! \ NTodavía no se ha registrado, es mejor que se registre primero ... \ n \ nComando : ${prefix}register nama|umur\nContoh : ${prefix}regisistrate Nombre|Edad`
}

exports.daftarD = () => {
        return `*「 YA REGISTRATE😁 」*\n\n*REGISTRO ECHO*`
}

exports.wrongf = () => {
        return `*Formato incorrecto / texto en blanco*`
}

exports.clears = () => {
        return`*SE LIMPIO TODO EXITOSAMENTE*`
}

exports.pc = () => {
        return`*「 REGISTRASI 」*\n\nuntuk mengetahui apakah lu udah terdaftar atau belum silahkah check message yang gw kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA REGISTER 」*\n\nlu udah terdaftar dengan data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n JANGAN SAMPAI LUPA NOMOR INI KARENA INI PENTING TOD`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* tidak di temukan tod\coba tulis *${prefix}menu* bego lu`
}

exports.owneresce = (pushname) => {
        return`*ngentod lu ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*ngentod ${pushname} limit lu hari ini udah habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nama* : ${pushname}\n  ❏ *Nomer* : ${sender.split("@")[0]}\n  ❏ *Uang* : ${uangkau}`
}

