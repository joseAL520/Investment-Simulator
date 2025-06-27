import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
    marginBottom: 20,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
   sublogo: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
   subTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 6,
  },
  section: {
    marginBottom: 12,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  col: {
    flexDirection: 'column',
    marginBottom: 6,
    marginLeft: 50,
    marginRight: 50,
  },
  line:{
    borderBottomWidth: 3,
    borderBottomColor: '#eee',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
    marginBottom: 20,
  }
});

const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const formatCurrency = (value) => {
  if (value == null || value === '') return "-";
  return value.toLocaleString('es-ES', { style: 'currency', currency: 'USD' });
};

const MyDocument = ({data}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header con logo y nombre */}
      <View style={styles.header}>
        <Image style={styles.logo} src="imgs/logo.png"/>
        <Text style={styles.title}>SmartInvest</Text>
      </View>

      {/* Detalles de la transacción  part 1*/}
      
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>ID Transacción:</Text>
          <Text style={styles.value}>{data.transaccionid}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tipo de Operación:</Text>
          <Text style={styles.value}>{data.tipooperacion.toUpperCase()}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Cantidad:</Text>
          <Text style={styles.value}>{data.cantidad}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Valor Actual Cripto:</Text>
          <Text style={styles.value}>{formatCurrency(data.valoractualcripto)}</Text>
        </View>
 {/* part 2 */}
  <View style={styles.line}></View>

  <View style={styles.subHeader}>
        <Text style={styles.label}>Cripto:</Text>
        <Text style={styles.subTitle}> {data.nombreactivo}</Text>
        <Image style={styles.sublogo} src={data.img}/>
  </View>

    {data.tipooperacion === 'comprar'?(
    <View style={styles.row}>
      <View style={styles.col}>
          <Text style={styles.label}>Fecha y Hora de Compra:</Text>
          <Text style={styles.value}>{formatDate(data.fechahoracompra)}</Text>
      </View>
      <View style={styles.col}>
        <Text style={styles.label}>Valor Total con Comisión (Compra):</Text>
        <Text style={styles.value}>{formatCurrency(data.valortotalconcomisioncompra)}</Text>
      </View>
    </View>):( 
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>Fecha y Hora de Venta:</Text>
          <Text style={styles.value}>{formatDate(data.fechahoraventa)}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Valor Total con Comisión (Venta):</Text>
          <Text style={styles.value}>{formatCurrency(data.valortotalconcomisionventa)}</Text>
        </View>

      <View style={styles.col}>
        <Text style={styles.label}>ROI:</Text>
        <Text style={styles.value}>{data.roi || "-"}</Text>
     </View>
     </View>)}
    
  
     <View style={styles.line}></View>

    </View>
    </Page>
  </Document>
);

export default MyDocument;
