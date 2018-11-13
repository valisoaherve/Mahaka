unit sakafocode;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, FileUtil, Forms, Controls, Graphics, Dialogs, Grids,
  StdCtrls, ExtCtrls;

type

  { TSakafoForm }

  TSakafoForm = class(TForm)
    Daty: TStaticText;
    sary: TImage;
    SakafoMenu: TEdit;
    StringGrid1: TStringGrid;
    procedure FormActivate(Sender: TObject);
    procedure FormCreate(Sender: TObject);
  private

  public

  end;

var
  SakafoForm: TSakafoForm;

implementation

{$R *.lfm}

{ TSakafoForm }

procedure TSakafoForm.FormCreate(Sender: TObject);
begin
// sary.Picture.LoadFromFile('images/Mardi.jpg');
end;

procedure TSakafoForm.FormActivate(Sender: TObject);
begin
 Daty.Caption:=FormatDatetime('dddd',Now);
end;

end.

