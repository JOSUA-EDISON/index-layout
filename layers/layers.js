var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaAdministrasiKupang_1 = new ol.format.GeoJSON();
var features_PetaAdministrasiKupang_1 = format_PetaAdministrasiKupang_1.readFeatures(json_PetaAdministrasiKupang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaAdministrasiKupang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaAdministrasiKupang_1.addFeatures(features_PetaAdministrasiKupang_1);
var lyr_PetaAdministrasiKupang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaAdministrasiKupang_1, 
                style: style_PetaAdministrasiKupang_1,
                popuplayertitle: "Peta Administrasi Kupang",
                interactive: true,
    title: 'Peta Administrasi Kupang<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_0.png" /> Afoan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_1.png" /> Akle<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_2.png" /> Apren<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_3.png" /> Bakuin<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_4.png" /> Batnun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_5.png" /> Batuinan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_6.png" /> Baumata<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_7.png" /> Baumata Barat<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_8.png" /> Baumata Timur<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_9.png" /> Baumata Utara<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_10.png" /> Bena<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_11.png" /> Benlutu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_12.png" /> Benu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_13.png" /> Besana<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_14.png" /> Besmarak<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_15.png" /> Biloto<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_16.png" /> Binafun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_17.png" /> Bioba Baru<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_18.png" /> Bipolo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_19.png" /> Bitobe<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_20.png" /> Boentuka<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_21.png" /> Bokong<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_22.png" /> Bokonusan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_23.png" /> Bolok<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_24.png" /> Bone<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_25.png" /> Bonleu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_26.png" /> Bonmuti<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_27.png" /> Camplong Ii<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_28.png" /> Ekateta<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_29.png" /> Enolanan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_30.png" /> Enoneten<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_31.png" /> Enoraen<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_32.png" /> Erbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_33.png" /> Fatukanutu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_34.png" /> Fatukoko<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_35.png" /> Fatukona<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_36.png" /> Fatumetan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_37.png" /> Fatumnasi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_38.png" /> Fatumonas<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_39.png" /> Fatunaus<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_40.png" /> Fatusuki<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_41.png" /> Fatuteta<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_42.png" /> Faumes<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_43.png" /> Feto Mone<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_44.png" /> Halme<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_45.png" /> Hane<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_46.png" /> Hansisi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_47.png" /> Haumenibaki<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_48.png" /> Honuk<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_49.png" /> Hueknutu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_50.png" /> Huilelot<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_51.png" /> Kairane<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_52.png" /> Kalali<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_53.png" /> Kauniki<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_54.png" /> Kelurahan Airmata<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_55.png" /> Kelurahan Airnona<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_56.png" /> Kelurahan Alak<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_57.png" /> Kelurahan Babau<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_58.png" /> Kelurahan Bakunase<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_59.png" /> Kelurahan Bakunase Dua<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_60.png" /> Kelurahan Batakte<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_61.png" /> Kelurahan Batu Plat<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_62.png" /> Kelurahan Bello<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_63.png" /> Kelurahan Bonipoi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_64.png" /> Kelurahan Buraen<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_65.png" /> Kelurahan Camplong I<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_66.png" /> Kelurahan Fatubesi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_67.png" /> Kelurahan Fatufeto<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_68.png" /> Kelurahan Fatukoa<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_69.png" /> Kelurahan Fatululi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_70.png" /> Kelurahan Fontein<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_71.png" /> Kelurahan Kayu Putih<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_72.png" /> Kelurahan Kelapa Lima<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_73.png" /> Kelurahan Kolhua<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_74.png" /> Kelurahan Kuanino<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_75.png" /> Kelurahan Lai Lai Bisi Kopan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_76.png" /> Kelurahan Lasiana<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_77.png" /> Kelurahan Lelogama<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_78.png" /> Kelurahan Liliba<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_79.png" /> Kelurahan Mantasi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_80.png" /> Kelurahan Manulai Ii<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_81.png" /> Kelurahan Manutapen<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_82.png" /> Kelurahan Maulafa<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_83.png" /> Kelurahan Merdeka<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_84.png" /> Kelurahan Naibonat<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_85.png" /> Kelurahan Naikliu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_86.png" /> Kelurahan Naikolan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_87.png" /> Kelurahan Naikoten Dua<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_88.png" /> Kelurahan Naikoten Satu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_89.png" /> Kelurahan Naimata<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_90.png" /> Kelurahan Naioni<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_91.png" /> Kelurahan Namosain<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_92.png" /> Kelurahan Nefonaek<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_93.png" /> Kelurahan Nonbes<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_94.png" /> Kelurahan Nunbaun Delha<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_95.png" /> Kelurahan Nunbaun Sabu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_96.png" /> Kelurahan Nunhila<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_97.png" /> Kelurahan Nunleu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_98.png" /> Kelurahan Oeba<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_99.png" /> Kelurahan Oebobo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_100.png" /> Kelurahan Oebufu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_101.png" /> Kelurahan Oenesu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_102.png" /> Kelurahan Oepura<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_103.png" /> Kelurahan Oesao<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_104.png" /> Kelurahan Oesapa<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_105.png" /> Kelurahan Oesapa Barat<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_106.png" /> Kelurahan Oesapa Selatan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_107.png" /> Kelurahan Oetete<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_108.png" /> Kelurahan Pasir Panjang<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_109.png" /> Kelurahan Penfui<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_110.png" /> Kelurahan Penkase Oeleta<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_111.png" /> Kelurahan Sikumana<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_112.png" /> Kelurahan Solor<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_113.png" /> Kelurahan Sonraen<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_114.png" /> Kelurahan Sulamu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_115.png" /> Kelurahan Takari<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_116.png" /> Kelurahan Tarus<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_117.png" /> Kelurahan Teunbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_118.png" /> Kelurahan Tode Kisar<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_119.png" /> Kelurahan Tuak Daun Merah<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_120.png" /> Kelurahan Tuatuka<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_121.png" /> Kesetnana<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_122.png" /> Kifu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_123.png" /> Kiubaat<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_124.png" /> Kiuoni<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_125.png" /> Koa<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_126.png" /> Kokfeu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_127.png" /> Kolabe<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_128.png" /> Kotabes<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_129.png" /> Kuaklalo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_130.png" /> Kuanheum<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_131.png" /> Kuanheun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_132.png" /> Kuannoel<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_133.png" /> Kuimasi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_134.png" /> Leloboko<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_135.png" /> Letbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_136.png" /> Letkole<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_137.png" /> Lifuleo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_138.png" /> Lilmus<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_139.png" /> Linamnutu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_140.png" /> Manubelon<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_141.png" /> Manulai<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_142.png" /> Manusak<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_143.png" /> Mata Air<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_144.png" /> Merbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_145.png" /> Mio<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_146.png" /> Muke<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_147.png" /> Mutis<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_148.png" /> Naekake A<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_149.png" /> Naekake B<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_150.png" /> Naikean<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_151.png" /> Naitae<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_152.png" /> Naunu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_153.png" /> Nefoneut<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_154.png" /> Nekbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_155.png" /> Nekmese<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_156.png" /> Nenas<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_157.png" /> Netemnanu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_158.png" /> Netemnanu Selatan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_159.png" /> Netemnanu Utara<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_160.png" /> Nitneo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_161.png" /> Niukbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_162.png" /> Niunbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_163.png" /> Noebesi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_164.png" /> Noelbaki<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_165.png" /> Noelelo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_166.png" /> Noelmina<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_167.png" /> Noepesu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_168.png" /> Nonbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_169.png" /> Nuapin<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_170.png" /> Nuataus<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_171.png" /> Nunbena<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_172.png" /> Nunkurus<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_173.png" /> Nunmafo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_174.png" /> Nunsaen<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_175.png" /> Nunuanah<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_176.png" /> Oben<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_177.png" /> Oebelo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_178.png" /> Oebesi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_179.png" /> Oebobo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_180.png" /> Oebola<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_181.png" /> Oebola Dalam<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_182.png" /> Oeekam<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_183.png" /> Oefafi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_184.png" /> Oefeto<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_185.png" /> Oehela<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_186.png" /> Oelatimo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_187.png" /> Oelbanu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_188.png" /> Oelbiteno<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_189.png" /> Oeletsala<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_190.png" /> Oelfatu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_191.png" /> Oelnaineno<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_192.png" /> Oelnasi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_193.png" /> Oelomin<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_194.png" /> Oelpuah<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_195.png" /> Oeltua<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_196.png" /> Oemasi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_197.png" /> Oematnunu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_198.png" /> Oemofa<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_199.png" /> Oemolo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_200.png" /> Oenaek<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_201.png" /> Oenaunu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_202.png" /> Oenif<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_203.png" /> Oeniko<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_204.png" /> Oenoni<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_205.png" /> Oenoni Ii<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_206.png" /> Oenuntono<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_207.png" /> Oepaha<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_208.png" /> Oesao<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_209.png" /> Oesena<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_210.png" /> Oesusu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_211.png" /> Oeteta<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_212.png" /> Oeuban<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_213.png" /> Oh\'Aem<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_214.png" /> Oh\'Aem Ii<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_215.png" /> Onansila<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_216.png" /> Otan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_217.png" /> Pakubaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_218.png" /> Pantai Beringin<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_219.png" /> Pantulan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_220.png" /> Pariti<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_221.png" /> Passi<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_222.png" /> Pathau<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_223.png" /> Penfui Timur<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_224.png" /> Pitay<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_225.png" /> Pollo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_226.png" /> Ponain<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_227.png" /> Poto<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_228.png" /> Pukdale<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_229.png" /> Rabeka<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_230.png" /> Raknamo<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_231.png" /> Retraen<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_232.png" /> Sahraen<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_233.png" /> Salbait<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_234.png" /> Saubalan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_235.png" /> Saukibe<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_236.png" /> Seki<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_237.png" /> Sillu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_238.png" /> Soba<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_239.png" /> Soliu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_240.png" /> Sumlili<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_241.png" /> Tablolong<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_242.png" /> Taloetan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_243.png" /> Tanah Merah<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_244.png" /> Tanah Putih<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_245.png" /> Taneotob<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_246.png" /> Tanini<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_247.png" /> Tasikona<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_248.png" /> Tasinifu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_249.png" /> Tesabela<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_250.png" /> Tesbatan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_251.png" /> Tesbatan Ii<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_252.png" /> Timau<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_253.png" /> Tolnaku<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_254.png" /> Toobaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_255.png" /> Tuakau<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_256.png" /> Tuakole<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_257.png" /> Tuapanaf<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_258.png" /> Tuapukan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_259.png" /> Tuasene<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_260.png" /> Tubuhue<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_261.png" /> Tunbaun<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_262.png" /> Tunbes<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_263.png" /> Tunfeu<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_264.png" /> Tupan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_265.png" /> Uiasa<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_266.png" /> Uiboa<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_267.png" /> Uitao<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_268.png" /> Uitiuh Ana<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_269.png" /> Uitiuh Tuan<br />\
    <img src="styles/legend/PetaAdministrasiKupang_1_270.png" /> Usapi Sonbai<br />'
        });
var format_LineJalan_2 = new ol.format.GeoJSON();
var features_LineJalan_2 = format_LineJalan_2.readFeatures(json_LineJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineJalan_2.addFeatures(features_LineJalan_2);
var lyr_LineJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineJalan_2, 
                style: style_LineJalan_2,
                popuplayertitle: "Line Jalan",
                interactive: true,
                title: '<img src="styles/legend/LineJalan_2.png" /> Line Jalan'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_RumahSakit_4 = new ol.format.GeoJSON();
var features_RumahSakit_4 = format_RumahSakit_4.readFeatures(json_RumahSakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_4.addFeatures(features_RumahSakit_4);
var lyr_RumahSakit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_4, 
                style: style_RumahSakit_4,
                popuplayertitle: "Rumah Sakit",
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_4.png" /> Rumah Sakit'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PetaAdministrasiKupang_1.setVisible(true);lyr_LineJalan_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_RumahSakit_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PetaAdministrasiKupang_1,lyr_LineJalan_2,lyr_Sungai_3,lyr_RumahSakit_4];
lyr_PetaAdministrasiKupang_1.set('fieldAliases', {'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', });
lyr_LineJalan_2.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Sungai_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RumahSakit_4.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_PetaAdministrasiKupang_1.set('fieldImages', {'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_LineJalan_2.set('fieldImages', {'REMARK': '', });
lyr_Sungai_3.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_RumahSakit_4.set('fieldImages', {'REMARK': '', });
lyr_PetaAdministrasiKupang_1.set('fieldLabels', {'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kota': 'inline label - always visible', 'Provinsi': 'inline label - always visible', });
lyr_LineJalan_2.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_Sungai_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RumahSakit_4.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_RumahSakit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});