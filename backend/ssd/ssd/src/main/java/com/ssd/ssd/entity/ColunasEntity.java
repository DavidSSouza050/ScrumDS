package com.ssd.ssd.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@NoArgsConstructor 
@AllArgsConstructor
@Table(name = "TB_SSD_COLUNA")
public class ColunasEntity  implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDENT")
	private Long id;
	
	@Column(name = "NOME")
	private String nome ;
	
	@OneToMany(mappedBy = "coluna", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	private List<ItemEntity>items;

}
