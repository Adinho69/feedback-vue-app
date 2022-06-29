<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <transition>
      <div v-if="!loading" class="container">
        <v-card class="my-5">
          <v-col align="center" justify="center">
            <v-card-title class="mx-auto text-h2" primary-title>
              Feedback
            </v-card-title>

            <v-chip-group
              active-class=" white--text text--aceent-4"
              column
              class="chipGroups"
            >
              <v-chip
                color="#00E676"
                v-for="(i, index) in selectNota"
                :key="index"
                @click="btn(index, i.nota)"
                class="mx-auto chipItem"
              >
                {{ i.nota }}
              </v-chip>
            </v-chip-group>

            <v-row align="center" justify="center" class="my-5">
              <v-text-field
                filled
                rounded
                dense
                class="coment mt-6"
                name="name"
                label="Deixe seu comentario"
                id="comment"
                v-model="comment"
              ></v-text-field>
              <v-btn
                :disabled="isActive"
                class="my-auto sendBtn"
                color="#00E676"
                plain
                @click="post"
                ><v-icon>mdi-send</v-icon></v-btn
              >
            </v-row>
          </v-col>
        </v-card>
        <v-row class="my-5">
          <v-col v-for="(item, i) in comentarios" :key="i" md="6">
            <v-card>
              <v-list class="d-flex">
                <v-card-text class="text-h5">
                  Nota:
                  <span class="green--text text--accent-3">{{
                    item.nota
                  }}</span>
                </v-card-text>
                <v-btn rounded plain class="pa-0" @click="deleteComment(i)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>

                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn rounded plain class="pa-0" v-bind="attrs" v-on="on">
                      <v-icon>mdi-tooltip-edit</v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      Edit Comment
                    </v-card-title>

                    <v-chip-group
                      active-class=" white--text text--aceent-4"
                      column
                      class="chipGroups"
                    >
                      <v-chip
                        color="#00E676"
                        v-for="(i, index) in selectNota"
                        :key="index"
                        @click="btn(index, i.nota)"
                        class="mx-auto pa-20"
                      >
                        {{ i.nota }}
                      </v-chip>
                    </v-chip-group>

                    <v-text-field
                      filled
                      rounded
                      dense
                      class="newNota my-5 mx-auto"
                      label="New Comment"
                      id="id"
                      v-model="newComment"
                    ></v-text-field>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        @click="editComment(i)"
                        color="primary"
                        text
                        :disabled="isActive"
                      >
                        <v-icon color="#00E676">mdi-send</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list>
              <v-card-text
                class="text-h4 green--text text--accent-3 comentario"
              >
                {{ item.comentario }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </transition>
  </div>
</template>



<script lang="ts">
//import { createDecorator } from "vue-class-component";
import { Vue, Component, Watch } from "vue-property-decorator";
import NotaDTO from "@/models/NotaDTO";

@Component
export default class Feedback extends Vue {
  private dialog = false;
  private selectNota: Array<NotaDTO> = [];
  notas = [
    { nota: 1, select: false },
    { nota: 2, select: false },
    { nota: 3, select: false },
    { nota: 4, select: false },
    { nota: 5, select: false },
    { nota: 6, select: false },
    { nota: 7, select: false },
    { nota: 8, select: false },
    { nota: 9, select: false },
    { nota: 10, select: false },
  ];
  private nota = 0;
  private comment = "";
  private comentarios: Array<object> = [];
  private isActive = false;
  private newComment = "";
  private notaActive = false;
  loading = true;

  created() {
    this.selectNota = this.notas;
    this.setLoading();
  }

  @Watch("comment, newComment") onComment() {
    if (this.comment.length >= 10) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  private btn(id: number, nota: number): void {
    //this.isActive = true;
    this.nota = nota;
    this.selectNota = this.notas;
    this.selectNota[id].select = true;
  }

  private setLoading(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  private post(): void {
    if (this.nota !== 0) {
      this.comentarios.push({
        nota: this.nota,
        comentario: this.comment,
      });
      this.comment = "";
      this.nota = 0;
    } else {
      window.alert("Avalie-nos com sua nota!");
    }
  }

  private deleteComment(idComment: number): void {
    this.comentarios.splice(idComment, 1);
  }

  private editComment(idComment: number): void {
    this.dialog = false;
    //const newComment = this.comentarios[idComment];
    this.comentarios[idComment] = {
      nota: this.nota,
      comentario: this.newComment,
    };
  }
}
</script>

<style scoped>
.coment {
  max-width: 50rem;
}
.active {
  background-color: tomato;
}
ul {
  display: flex;
  max-width: 700px;
}
.newUl {
  display: flex;
  max-width: 700px;
  margin-top: 10px;
}
.newLi {
  text-align: center;
  align-content: center;
  align-items: center;
  background-color: #00ff84b1;
  margin: 3 3px;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  text-align: center;
  background-color: #00e67796;
  margin: 0 5px;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
li:hover {
  background-color: tomato;
}
.container {
  max-width: 1000px;
  align-content: center;
  background-color: #eeeeee;
}
h1 {
  margin: auto 0;
  max-width: 10rem;
}
.sendBtn {
  margin-left: 10px;
  border-radius: 50%;

  padding: 0;
}

.newNota {
  max-width: 300px;
}

.chipGroups {
  max-width: 600px;
  height: 70px;
}
.chipItem {
  padding: 20px;
  height: 100px;

  border-radius: 50%;
}
</style>