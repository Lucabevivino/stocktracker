#include <cstdlib>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]){
  
  char file_path[256];  
  char *line = NULL;
  size_te len = 0;

  printf("\n<<< csv parser initialized >>>\n");
  printf("Insert the file-path you want to parse: ");
  scanf("%s", file_path);
  printf("hai inserito il percorso: %s\n", file_path);

  FILE *fp = fopen(file_path, "r");
  if(fp == NULL){
    printf("Errore in apertura file!");
    return EXIT_FAILURE;
  }
  getline(&line,&len, fp);
  

  

  
  
return 0;  
}
