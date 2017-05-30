function navigateTop40(reportName)
{
	//var url = '/pentaho/api/repos/public/ptar/top40'
	var url = '/pentaho/api/repos/%3Apublic%3Aptar%3Adashboard%3Atop40%3A';
	switch (reportName)
	{
		case 'Pinjaman Bahan':
			url = url + 'pinjaman.wcdf/generatedContent';
			break;
		
		case 'Pengunjung Perpustakaan' :
			url = url +'pengunjung.wcdf/generatedContent';
			break;
		
		case 'Kapasiti Tempat Duduk':
			url = url +'tempatduduk.wcdf/generatedContent';
			break;
			
		case 'Keahlian Perpustakaan':
			url = url +'ahli.wcdf/generatedContent';
			break;
		
		case 'Bahan Bercetak':
			url = url +'bahanbercetak.wcdf/generatedContent';
			break;
		
		case 'Bahan Bukan Bercetak':
			url = url +'bahanxbercetak.wcdf/generatedContent';
			break;
		
		case 'Bahan Repositori Institusi':
			url = url +'repositori.wcdf/generatedContent';
			break;
		
		case 'Perjawatan':
			url = url +'perjawatan.wcdf/generatedContent';
			break;
		
		case 'Perbelanjaan':
			url = url +'perbelanjaan.wcdf/generatedContent';
			break;
		
		case 'Konsultasi Akademik':
			url = url +'konsultasi.wcdf/generatedContent';
			break;
			
		
	}
	window.location.href = url;


}
