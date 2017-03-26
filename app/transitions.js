export default function(){
  this.transition(
    this.fromRoute('bands.band.song'),
    this.toRoute('bands.band.details'),
     this.use('toRight'),
  );
}