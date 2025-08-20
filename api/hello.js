export default function handler(req, res) {
    const nome = req.query.nome || "MUNDO";
    res.status(200).json({ mensagem: `Olá, ${nome}!` });
}