package br.com.TioVan.models;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection="Motorista")
public class Motorista extends Adulto {
        @Id
        private String id;
	private String apelido; //Ex: Tio Valter
	private String senha;
	private List<String> passageiros;
	private List<String> clientes;
	
	public Motorista(String nome, String apelido, Genero genero, String cpf, String celular, Endereco endereco, String email, String senha) {
		super(nome, genero, cpf, celular, email, endereco);
		this.apelido = apelido;
		this.senha = senha;
		passageiros = new ArrayList<String>();
		clientes = new ArrayList<String>();
	}
	
	public void inserePassageiro(String idPassageiro) {
		passageiros.add(idPassageiro);
	}
	
	public void insereCliente(String idCliente) {
		clientes.add(idCliente);
	}
	
	public String getApelido() {
		return apelido;
	}
	public void setApelido(String apelido) {
		this.apelido = apelido;
	}

	public List<String> getPassageiros() {
		return passageiros;
	}

	public void setPassageiros(List<String> passageiros) {
		this.passageiros = passageiros;
	}

	public List<String> getClientes() {
		return clientes;
	}

	public void setClientes(List<String> clientes) {
		this.clientes = clientes;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
