const { clientes } = require('../../../models')
exports.getAll = async (req, rest) => {
	const allClientes = await clientes.findAll({attributes: [
		'id',
		'tipo',
		'nome',
		'nome_fantasia',
		// infor pessoas
		'data_nascimento',
		'data_fundacao',
		'nacionalidade',
		'estado_civil',
		'rg',
		'cpf_cnpj',
		'inscricao_estadual',
		// endereço
		'endereco',
		'bairro',
		'numero',
		'complemento',
		'cidade',
		'uf',
		//  contato
		'email',
		'telefone',
		'celular',
		'createdAt',
		'updateAt',]});
	return allClientes;
}
