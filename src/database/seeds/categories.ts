import { createConnection } from "typeorm";

(async () => {
	const connection = await createConnection();
	await connection.query(`
    INSERT INTO categories (name,description,image,water_per_sprinkle,days_interval_per_sprinkle) 
    values 
    (
      'Imbé',
      'Não pode pegar sol e deve ficar em temperatura ambiente, dentro de casa.',
      'https://minhasplantas.s3.amazonaws.com/media/plantas/galeria/Philodendron-imbe-01.jpg',
      400,
      2
    ),
    (
      'Aningapara',
      'Não pode pegar sol e deve ficar em temperatura ambiente, dentro de casa.',
      'https://blog.pajaris.com.br/wp-content/uploads/2021/07/comigo-ninguem-pode-2.jpg',
      500,
      1
    ),
    (
      'Peperomia',
      'Não pode pegar sol e deve ficar em temperatura ambiente, dentro de casa.',
      'https://imagens-revista.vivadecora.com.br/uploads/2020/09/decoracao-com-peperomia-melancia-pinterest-1.jpg',
      200,
      3
    ),
    (
      'Espada de São Jorge',
      'Não pode pegar sol e deve ficar em temperatura ambiente, dentro de casa.',
      'https://imagens-revista.vivadecora.com.br/uploads/2019/02/okok.jpg',
      250,
      2
    )
  `);
})().then(() => console.log("Categorias geradas."));
